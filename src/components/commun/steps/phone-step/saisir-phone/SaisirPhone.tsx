import {useState, useEffect, FormEvent} from 'react'
import './SaisirPhone.css'
import Button from 'react-bootstrap/Button';
import VerifierPhone from '../verifier-phone/VerifierPhone';
import { generateOtpPhone } from '../../../../../ApiService';
import NotificationModal from '../../../../commun/notification-modal/NotificationModal'
import OtpGenerationStatus from '../../../../../enums/OtpGenerationStatus';

function SaisirPhone() {
    
    const [keyPhone, setKeyPhone] = useState<string>();
    const [numPhone, setNumPhone] = useState<string>();
    
    const [response, setResponse] = useState<String>();

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [mssgModalNotification, SetMssgModalNotification] = useState<string>();
    const [modalColor, setModalColor] = useState<string>();

    

    useEffect(() => {
        setShow(false);
    }, []);


    function handleSubmitPhone(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const keyPhoneValue = (e.target as HTMLFormElement)['keyPhone'].value;
        const numPhoneValue = (e.target as HTMLFormElement)['numPhone'].value;
        setKeyPhone(keyPhoneValue);
        setNumPhone(numPhoneValue);
        generateOtpPhone(keyPhoneValue, numPhoneValue)
            .then(data => {
                    if(data === OtpGenerationStatus.SUCCESS || data === OtpGenerationStatus.EMAIL_ERROR) {
                        setResponse(data);
                        SetMssgModalNotification("Un SMS de confirmation vous a été envoyé sur votre phone. Veuillez saisir le code reçu pour valider votre numéro de téléphone");
                        setModalColor("#0cf569")
                        handleShow();
                    } else if(data === OtpGenerationStatus.MAX_GENERATED_OTP_ERROR) {
                        SetMssgModalNotification("Une erreur est servenue, veuillez reessaye plus tard")
                        setModalColor("rgb(251 0 46)")
                        handleShow();
                    }
                })
                .catch(error => console.error(error));

    }

    return( <>
        {   !response ? ( <>
                <div className='style-saisir-phone'>
                <p className="p-phone">Veuillez saisir votre numéro de téléphone pour finaliser la création de votre espace personnel.</p>
                <form onSubmit={handleSubmitPhone}>
                    <label className='label-phone' id="num-tel">N° de téléphone</label>
                    <br />
                    <input className='input-phone' style={{width: "8%"}} type='text' name='keyPhone' defaultValue={"+212"} required/>
                    <input className='input-phone' type='text' name='numPhone' required/>
                    <br />
                    <Button className='button-saisir-phone' type='submit'>Suivant</Button>
                </form>
                </div>

                <NotificationModal show={show} onHide={handleClose} modalColor={{backgroundColor: modalColor}}>
                    {mssgModalNotification}
                </NotificationModal>
             </>
        ) : ( <>
            <VerifierPhone keyPhone={keyPhone!} numPhone={numPhone!}/>
            <NotificationModal show={show} onHide={handleClose} modalColor={{backgroundColor: modalColor}}>
                {mssgModalNotification}
            </NotificationModal>
            </> )
        
        } 
        </>
    )
}
export default SaisirPhone



