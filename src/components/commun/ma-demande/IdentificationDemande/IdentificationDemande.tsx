import './IdentificationDemande.css'
import Button from 'react-bootstrap/Button';
import {useState, useEffect, FormEvent} from 'react';
import {generateOtpEmailLogin } from "../../../../ApiService"
import OtpGenerationStatus from '../../../../enums/OtpGenerationStatus';
import NotificationModal from "../../../commun/notification-modal/NotificationModal"
import VerificationDemande from './Verification-demande/VerificationDemande';



function IdentificationDemande() {

    const [email, setEmail] = useState<string>();
    const [response, setResponse] = useState<string>();

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [mssgModalNotification, SetMssgModalNotification] = useState<string>();
    const [modalColor, setModalColor] = useState<string>();


    useEffect(() => {
        setShow(false);
    },[])


    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const emailValue = (e.target as HTMLFormElement)['email'].value;
        setEmail(emailValue);
        generateOtpEmailLogin(emailValue)
                .then(data => {
                    if(data === OtpGenerationStatus.SUCCESS) {
                        setResponse(data);
                        SetMssgModalNotification("Un email contenant votre code d’accès à votre espace personnel vous a été envoyé avec succès");
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
    return (<>
        {
        !response ? ( <>
            <h2 className="h2-demande">Nouveau code d’accès</h2>
            <p className="p-demande">Saisissez vos informations pour récupérer votre code</p>

            <form onSubmit={handleSubmit}>
                <label className='label-email' id="email">Adresse email</label>
                <br />
                <input className='input-email' type='email' name='email' required />
                <br />
                <Button className='button-saisir-email-demande' type='submit'>Suivant</Button>
            </form>
            <NotificationModal show={show} onHide={handleClose} modalColor={{backgroundColor: modalColor}}>
                    {mssgModalNotification}
            </NotificationModal>
        
        </>
    ) : (
        <> 
            <VerificationDemande email={email!} />
            <NotificationModal show={show} onHide={handleClose} modalColor={{backgroundColor: modalColor}}>
                {mssgModalNotification}
            </NotificationModal>
        </>) }
    
    </>)
}
export default IdentificationDemande