import './SaisirEmail.css';
import VerifierEmail from "../verifier-email/VerifierEmail"

import Button from 'react-bootstrap/Button';
import {useState, useEffect, FormEvent} from 'react';

import { generateOtpEmail } from "../../../../../ApiService"
import NotificationModal from "../../../../commun/notification-modal/NotificationModal"
import OtpGenerationStatus from '../../../../../enums/OtpGenerationStatus';

function SaisirEmail() {

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
        generateOtpEmail(emailValue)
                .then(data => {
                    if(data === OtpGenerationStatus.SUCCESS || data === OtpGenerationStatus.EMAIL_ERROR) {
                        setResponse(data);
                        SetMssgModalNotification("Un email de confirmation vous a été envoye sur votre boîte. Veuillez saisir le code recu pour valider la création de votre espace personnel");
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
        {
            !response ? ( <>
                <div className='style-saisir-email'>
                    <p className="p-email">Veuillez saisir votre adresse email afin de créer votre espace personnel</p>
                    
                    <form onSubmit={handleSubmit}>
                        <label className='label-email' id="email">Adresse email</label>
                        <br />
                        <input className='input-email' type='email' name='email' required />
                        <br />
                        <Button className='button-saisir-email' type='submit'>Suivant</Button>
                    </form>
                </div>

                <NotificationModal show={show} onHide={handleClose} modalColor={{backgroundColor: modalColor}}>
                    {mssgModalNotification}
                </NotificationModal>
            </>
            ) : (<> 
                <VerifierEmail email={email!} />
                <NotificationModal show={show} onHide={handleClose} modalColor={{backgroundColor: modalColor}}>
                    {mssgModalNotification}
                </NotificationModal>
             </>)

        }
        
        </>
    )

}
export default SaisirEmail