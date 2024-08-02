import './PhoneStep.css'
import StepContainer from "../general-container-step/StepContainer";
import StepContent from "../general-content-step/StepContent";

import basFleche from '../../../../assets/fleche-bas.png';
import hautFleche from '../../../../assets/fleche-haut.png';

import SaisirPhone from './saisir-phone/SaisirPhone';

function PhoneStep() {
    return (
        <div className="title-back">
            <h2 className="title-creation">Ma demande de création de compte</h2>
            <div className="container-creation">

                <StepContainer styleFleche={{backgroundColor: "#3399FE"}} imgFleche={basFleche} containerTitle={"Vérification des coordonnées"}>
                    <StepContent styleCercle={{backgroundColor: "#2EBC34"}} titleContent={"Vérification de l’adresse mail"} />
                    <StepContent styleCercle={{backgroundColor: "#3399FE"}} titleContent={"Vérification du numéro de téléphone"}>
                        <SaisirPhone />
                    </StepContent>
                </StepContainer>
                
                <StepContainer styleFleche={{backgroundColor: "#C4C4C4"}} imgFleche={hautFleche} containerTitle={"Ma demande"}>
                </StepContainer>

                <StepContainer styleFleche={{backgroundColor: "#C4C4C4"}} imgFleche={hautFleche} containerTitle={"Mon dépôt (Optionnel)"}>
                </StepContainer>

                <StepContainer styleFleche={{backgroundColor: "#C4C4C4"}} imgFleche={hautFleche} containerTitle={"Mon rendez-vous visioconférence"}>
                </StepContainer>
            </div>
        </div>
    );
}
export default PhoneStep