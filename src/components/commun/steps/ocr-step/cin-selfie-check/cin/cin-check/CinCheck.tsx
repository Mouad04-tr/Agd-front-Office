import './CinCheck.css'
import DropdownCinCheck from './DropdownCinCheck';
import { useGlobalState } from '../../../../GlobalState';

interface CinCheckProps {
    checklogo: string;
    descriptif: string;
}

function CinCheck({checklogo, descriptif}: CinCheckProps) {
    
    const { file1, file2 } = useGlobalState();


    return (
        <div className="check-container">
            <div className="check-element1">
                <img className="cin-logo-style" src={checklogo} alt='image1' />
                <p className='title-cin'>{descriptif}</p>
                <p className='format-cin'>Format JPG, PNG ou PDF et un maximun de 5mo</p>
            </div>
            <div className="check-element2">
                {
                    file1? (
                           <p className='name-img-upload' style={{paddingTop:"15%"}}>{file1.name}</p>
                    ) : (
                        <DropdownCinCheck titleDesc={"Charger le cote recto"} cinUpload={"cinRecto"}/>
                    )
                }
                {
                    file2? (
                            <p  className='name-img-upload'>{file2.name}</p>
                        ) : (
                            <DropdownCinCheck titleDesc={"Charger le cote verso"} cinUpload={"cinVerso"}/>
                        )
                }
            </div>
        </div>

    )
    

}
export default CinCheck
