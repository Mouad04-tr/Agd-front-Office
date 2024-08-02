import './VerifierPhone.css'
import SaisirPhone from '../saisir-phone/SaisirPhone';
import {useState, FormEvent} from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

import { validateOtpPhone } from '../../../../../ApiService';
import StatusOtp from '../../../../../enums/StatusOtp';

import { generateOtpPhone } from '../../../../../ApiService';
import NotificationModal from '../../../../commun/notification-modal/NotificationModal'
import OtpGenerationStatus from '../../../../../enums/OtpGenerationStatus';



interface VerifierPhoneProps {
    keyPhone: string;
    numPhone: string;
}
  
function VerifierPhone({ keyPhone, numPhone }: VerifierPhoneProps) {


    const phone = keyPhone + numPhone;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [mssgModalNotification, SetMssgModalNotification] = useState<string>();
    const [modalColor, setModalColor] = useState<string>();

    const [showSaisirPhone, setShowSaisirPhone] = useState<boolean>(false);

    
    let navigate = useNavigate();



    function handleSubmitOtpPhone(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const otpPhoneValue = (e.target as HTMLFormElement)['otpPhone'].value;
        validateOtpPhone(otpPhoneValue, keyPhone, numPhone)
                .then(data => {
                    if(data === StatusOtp.VALID) {
                        navigate("/verification-identite");
                    } else if( data=== StatusOtp.INVALID || data === StatusOtp.TIMEOUT) {
                        SetMssgModalNotification("Le code saisie n'est pas correct, veuillez saisir le bon code")
                        setModalColor("rgb(251 0 46)")
                        handleShow();
                    } else if( data === StatusOtp.EXPIRED_ATTEMPT) {
                        SetMssgModalNotification("Une erreur est servenue, veuillez reessaye plus tard")
                        setModalColor("rgb(251 0 46)")
                        handleShow();
                    }
                })
                .catch(error => console.error(error));
    }

    const handleRenvoyerOTPClick = () => {
        generateOtpPhone(keyPhone, numPhone)
            .then(data => {
                if(data === OtpGenerationStatus.SUCCESS || data === OtpGenerationStatus.EMAIL_ERROR) {
                    SetMssgModalNotification("Un sms de confirmation vous a été envoye sur votre phone. Veuillez saisir le code recu pour valider votre numero de telephone");
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

    const handleChangePhoneClick = () => {
        setShowSaisirPhone(true);
    };
    
    return (<>
      {!showSaisirPhone ? ( <>
        <div className='style-saisir-email-otp'>
            <p className="p-email-otp">
                Nous avons envoyé un SMS à ce numéro <span style={{color:"#3399FE"}}>
                    {phone}
                </span> Veuillez saisir le code reçu
            </p>
            <form onSubmit={handleSubmitOtpPhone}>
                <input className='input-phone-otp' type='text' name='otpPhone' required />
                <br />
                <p className="p-email-otp " style={{fontSize: "14px"}}>
                    Vous n’avez pas reçu de code ? 
                    <a className="a-style" href="#" onClick={handleRenvoyerOTPClick} >  Réessayer / Renvoyer</a>
                </p>
                <p className="p-email-otp " style={{fontSize: "14px"}}>
                     Numéro de téléphone erroné ? 
                    <a className="a-style" href="#" onClick={handleChangePhoneClick}>  Changer le numéro de téléphone </a>
                </p>
                <Button className='button-saisir-phone-otp' type='submit'>Suivant</Button>
            </form>
        </div>
        <NotificationModal show={show} onHide={handleClose} modalColor={{backgroundColor: modalColor}}>
            {mssgModalNotification}
        </NotificationModal>
      </>) : (<SaisirPhone />)
}  </> )
}

export default VerifierPhone