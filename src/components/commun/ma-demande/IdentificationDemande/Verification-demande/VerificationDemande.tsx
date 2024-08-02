import '../IdentificationDemande.css'
import Button from 'react-bootstrap/Button';
import {useState, useEffect, FormEvent} from 'react';
import { validateOtpEmailLogin } from "../../../../../ApiService"
import StatusOtp from '../../../../../enums/StatusOtp';
import StepClient from '../../../../../enums/StepClient';
import NotificationModal from "../../../notification-modal/NotificationModal";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from '../../../steps/GlobalState';



interface VerifierEmailProps {
    email: string;
}


function VerificationDemande({ email }: VerifierEmailProps) {


    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    let navigate = useNavigate();

    const [mssgModalNotification, SetMssgModalNotification] = useState<string>();
    const [modalColor, setModalColor] = useState<string>();



    useEffect(() => {
        setShow(false);
    },[])


    function handleSubmitOtpEmail(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const otpEmailValue = (e.target as HTMLFormElement)['otpEmail'].value;
        validateOtpEmailLogin(email, otpEmailValue)
                .then(data => { 
                    console.log(data)
                    if(data.statusOtp === StatusOtp.VALID) {
                        let idClient: number = data.idClient;
                        localStorage.setItem('idClient', idClient.toString())
                        localStorage.setItem('jwtToken', data.jwtToken)
                        if(data.step === StepClient.EMAIL_STEP){
                            navigate("/verification-phone"); 
                        } else if(data.step === StepClient.PHONE_STEP){
                            navigate("/verification-identite"); 
                        } else if(data.step === StepClient.OCR_STEP){
                            navigate("/verification-donnees"); 
                        } else if(data.step === StepClient.VERIFICATION_STEP){
                            navigate("/choisir-agence"); 
                        } else if(data.step === StepClient.AGENCY_STEP){
                            navigate("/recap-donnees"); 
                        } else if(data.step === StepClient.RECAP_STEP){
                            navigate("/effectuer-paiement"); 
                        } else if(data.step === StepClient.PAYMENT_STEP){
                            navigate("/prendre-rdv"); 
                        } 
                    } else if( data.statusOtp === StatusOtp.INVALID || data.statusOtp === StatusOtp.TIMEOUT) {
                        SetMssgModalNotification("Le code saisie n'est pas correct, veuillez saisir le bon code")
                        setModalColor("rgb(251 0 46)")
                        handleShow();
                    } else if( data.statusOtp === StatusOtp.EXPIRED_ATTEMPT) {
                        SetMssgModalNotification("Une erreur est servenue, veuillez reessaye plus tard")
                        setModalColor("rgb(251 0 46)")
                        handleShow();
                    }
                })
                .catch(error => console.error(error));
    }

    return( <>


                <h2 className="h2-demande">Reprendre ma demande...</h2>
                <p className="p-demande">Ssaisir le code reçu</p>

                <form onSubmit={handleSubmitOtpEmail}>
                        <input className='input-email-otp' type='text' name='otpEmail' required />
                        <br />
                        <Button className='button-saisir-email-demande' type='submit'>Suivant</Button> 
                </form>

  
          <NotificationModal show={show} onHide={handleClose} modalColor={{backgroundColor: modalColor}}>
              {mssgModalNotification}
          </NotificationModal>
      </>)

}
export default VerificationDemande