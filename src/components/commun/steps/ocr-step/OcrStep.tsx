import './OcrStep.css';
import StepContainer from "../general-container-step/StepContainer";
import StepContent from "../general-content-step/StepContent";

import basFleche from '../../../../assets/fleche-bas.png';
import hautFleche from '../../../../assets/fleche-haut.png';
import CinSelfieCheck from './cin-selfie-check/CinSelfieCheck';


function OcrStep() {
    return (
        <div className="title-back">
            <h2 className="title-creation">Ma demande de création de compte</h2>
            <div className="container-creation">

                <StepContainer styleFleche={{backgroundColor: "#2EBC34"}} imgFleche={hautFleche} containerTitle={"Vérification des coordonnées"}>
                </StepContainer>
                
                <StepContainer styleFleche={{backgroundColor: "#3399FE"}} imgFleche={basFleche} containerTitle={"Ma demande"}>
                    <StepContent styleCercle={{backgroundColor: "#3399FE"}} titleContent={"Mes piéces et Mon Selfie Check"}>
                        <CinSelfieCheck />
                    </StepContent>
                    <StepContent styleCercle={{backgroundColor: "#C4C4C4"}} titleContent={"Mes Informations"} />
                    <StepContent styleCercle={{backgroundColor: "#C4C4C4"}} titleContent={"Mon Agence"} />
                    <StepContent styleCercle={{backgroundColor: "#C4C4C4"}} titleContent={"Ma Confirmation"} />

                </StepContainer>

                <StepContainer styleFleche={{backgroundColor: "#C4C4C4"}} imgFleche={hautFleche} containerTitle={"Mon dépôt (Optionnel)"}>
                </StepContainer>

                <StepContainer styleFleche={{backgroundColor: "#C4C4C4"}} imgFleche={hautFleche} containerTitle={"Mon rendez-vous visioconférence"}>
                </StepContainer>
            </div>
        </div>
    );
}
export default OcrStep