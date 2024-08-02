import CinCheck from "../cin-selfie-check/cin/cin-check/CinCheck";
import SelfieCheck from "./selfie/selfie-check/SelfieCheck";
import './CinSelfieCheck.css';
import cinlogo from "../../../../../assets/cin-check.png";
import selfielogo from "../../../../../assets/selfie-check.png";
import Button from 'react-bootstrap/Button';

import NotificationModal from '../../../notification-modal/NotificationModal'

import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useGlobalState } from '../../GlobalState';
import { submitOcrStep } from "../../../../../ApiService";
import OcrStatus from "../../../../../enums/OcrStatus";

function CinSelfieCheck() {

    const { file1, file2, file3 } = useGlobalState();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [mssgErreur, SetMssgErreur] = useState<string>();


    let navigate = useNavigate();

    function handleUpload(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      e.preventDefault();

      if (file1 && file2 && file3 ) {
        submitOcrStep(file1, file2, file3)
        .then(data => {
            if (data.status === OcrStatus.SUCCESSFUL){
                navigate("/verification-donnees");
            } else if(data.status === OcrStatus.ERROR) {
                SetMssgErreur("Votre photo d'identité ne correspond pas à votre selfie. Veuillez soumettre une photo claire de vous-même.")
                handleShow();
            }
        })
        .catch(error => console.error(error));
      } else {
            SetMssgErreur("Vous devez fournir une photo de votre carte d'identité recto verso et une photo de vous-même.")
            handleShow();
      }    
    }

    return (<>
        <div className="style-cin-selfie-check">
            <p className="p-check">
                Identifiez-vous grâce au scan de votre CIN et à l'authentification biométrique
            </p>
            
            <CinCheck checklogo={cinlogo} descriptif={"Charger votre piéce d'identité (CIN/Carte de séjour)"}/>
            <SelfieCheck checklogo={selfielogo} descriptif={"Vérifier votre identité par un selfie check"}/>
            
            <Button className='button-upload' style={{marginBottom: "4%"}} type='submit' onClick={handleUpload}>Suivant</Button>

        </div>

        <NotificationModal show={show} onHide={handleClose} modalColor={{backgroundColor:"rgb(251 0 46)"}}>
            {mssgErreur}
        </NotificationModal>

        </>
    );

}
export default CinSelfieCheck