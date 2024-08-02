import './PrendreRdv.css';
import {useState, FormEvent, ChangeEvent, useEffect} from 'react';
import { createRdv } from '../../../../../ApiService';
import { getNbrAgentDispo } from '../../../../../ApiService';
import { useNavigate } from "react-router-dom";
import { getRdvByDate } from '../../../../../ApiService';
import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import Button from 'react-bootstrap/Button';
// @ts-ignore
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import ChoisirHeure from './choisir-heure/ChoisirHeure';

function PrendreRdv(){

    let navigate = useNavigate();
    const today = dayjs();

    const [isShowHeureList, setIsShowHeureList] = useState(false);
    const [heureSelectionnee, setHeureSelectionnee] = useState<string>('');
    const handleHeureSelectionnee = (heure: string) => {
        setHeureSelectionnee(heure); // Met à jour l'heure sélectionnée dans l'état
        setIsDateHeureSelected(true)
    };
    
    const [Time] = useState<string[]>(['09:00 AM','09:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM',
    '12:00 PM','12:30 PM','01:00 PM','01:30 PM','02:00 PM','02:30 PM','03:00 PM','03:30 PM','04:00 PM'])
    const [availableTime, setAvailableTime] = useState<string[]>([]);
    const [availableTimeByDate, setAvailableTimeByDate] = useState<string[]>([]);
    const [heuresCount, setHeuresCount] = useState<{ [key: string]: number }>({});

 
    // Function to disable weekends 0(Sunday) and 6(Saturday)
    const shouldDisableDate = (date: Dayjs): boolean => {
        const day = date.day();
        return day === 0 || day === 6;
    };

    //pour select date
    const [isShowDateCalendar, setIsShowDateCalendar] = useState(false);
    const handleClickDateCalendar = () => {
        setIsShowDateCalendar(isShowDateCalendar === true ? false: true);
    }
    
    const [isDateHeureSelected, setIsDateHeureSelected] = useState<boolean>(false);
    const [dateValue, setDateValue] = useState<Dayjs | null>(null);

    const handleChangeDateValue=(newValue: any) => { 
        setHeureSelectionnee('')
        setIsDateHeureSelected(false)
        setDateValue(newValue)
        const newValueFormat = newValue.format('YYYY-MM-DD')
        getNbrAgentDispo(newValueFormat)
            .then(dataNbrAgentDispo => {
                console.log("nbr agents dispo by date: "+dataNbrAgentDispo)
                getRdvByDate(newValueFormat)
                .then(data => {
                    // Extract hours and count occurrences
                    const counts = data.reduce((acc: { [key: string]: number }, curr) => {
                        acc[curr.heure] = (acc[curr.heure] || 0) + 1;
                        return acc;
                    }, {});
                    setHeuresCount(counts);
                    
                    // Extract hours with count >= 3
                    const times = Object.entries(counts)
                        .filter(([heure, count]) => count >= dataNbrAgentDispo)
                        .map(([heure]) => heure);
                    setAvailableTimeByDate(times);
                })
                .catch(error => console.error(error));
            })
            .catch(error => console.error(error));
        setIsShowHeureList(true)        
    }

    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(isChecked === true ? false: true);
    };

    useEffect(() => {
        setAvailableTime(
          Time.filter((item: string) => !availableTimeByDate.includes(item))
        );
    }, [availableTimeByDate, Time]); 

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let dateHeure: string | null;
        let date: string | null;
        let heure: string | null;

        // Définir un regex pour valider le format de la chaîne dateHeure (yyyy-mm-dd hh:mm AM/PM)
        const dateHeureRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2} [AP]M$/;

        dateHeure = (e.target as HTMLFormElement)['select-date'].value;
        if(dateHeure !== null && !isChecked){
            if( dateHeureRegex.test(dateHeure) && !isChecked){
                const [datePart, ...timeParts] = dateHeure!.split(' ');
                date = datePart;
                heure = timeParts.join(' '); // Join time parts to ensure time format is preserved
                console.log(dateHeure);
            } else {
                date = null;
                heure = null;
            }
        } else {
            date = null;
            heure = null;
        }
        console.log("date rdv: " + date);
        console.log("heure rdv: " + heure);
        
        createRdv(date, heure)
        navigate("/my-space");
    }
 

    // @ts-ignore
    return (
        <div className='style-prendre-rdv'>
            <p className="p-rdv">
                Le rendez-vous en visioconférence auprès de votre conseiller vous permet réaliser 
                l'entretien d'entree en relation avec la banque et vous dispense du passage en agence.
                Vous pourrez alors profiter pleinement de votre compte bancaire.
            </p>
            <p className="p-rdv1">
                Sélectionnez le créneau qui vous convient
            </p>
            <form onSubmit={handleSubmit}>
                <div className='style-box-rdv'>
                <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <FormControl sx={{ width: '30ch'}} variant="outlined">
                        <InputLabel htmlFor="select-date" >{dateValue != null ? '': 'Select date'}</InputLabel>
                        <OutlinedInput id="select-date"
                            endAdornment={
                                <InputAdornment position="end">
                                    <CalendarMonthIcon sx={{cursor:"pointer"}} />
                                </InputAdornment>
                            }
                            inputProps={{ readOnly: true }}
                            label="Select date"
                            name="select-date"
                            onClick={handleClickDateCalendar}
                            value={dateValue != null ? dateValue.format('YYYY-MM-DD')+' '+heureSelectionnee : null}
                        />
                        {isShowDateCalendar && 
                            <DateCalendar shouldDisableDate={shouldDisableDate}
                                minDate={today} 
                                value={dateValue}  
                                onChange={(newValue: any) => handleChangeDateValue(newValue)}
                            />
                        }
                    </FormControl>

                </LocalizationProvider>
                </Box>
                <div className='style-heure-rdv'>
                {isShowHeureList && 
                    <ChoisirHeure availableHeures={availableTime} 
                        onHeureSelectionnee={handleHeureSelectionnee} />
                }</div>
                </div>
                <div style={{display: "flex", marginTop: "2%"}}>
                    <input type="checkbox" id="a_planifier" name="a_planifier"
                        value="planifier_rdv" 
                        onChange={handleCheckboxChange} 
                    ></input>
                    <label htmlFor="a_planifier" className='style_a_planifier_rdv'> Aucun créneau ne me convient, je souhaite être contacter pour prendre un RDV en visioconférence</label>
                </div>
                <Button className='button-prendre-rdv' type='submit' disabled={!isDateHeureSelected && !isChecked}>Suivant</Button>
            </form>
        </div>
    )
}
export default PrendreRdv