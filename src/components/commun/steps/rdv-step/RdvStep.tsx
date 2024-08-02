import './RdvStep.css';
import StepContainer from "../general-container-step/StepContainer";
import basFleche from '../../../../assets/fleche-bas.png';
import hautFleche from '../../../../assets/fleche-haut.png';
import PrendreRdv from './PrendreRdv/PrendreRdv';


function RdvStep() {
    return (
        <div className="title-back">
            <h2 className="title-creation">Ma demande de création de compte</h2>
            <div className="container-creation">

                <StepContainer styleFleche={{backgroundColor: "#2EBC34"}} imgFleche={hautFleche} containerTitle={"Vérification des coordonnées"}>
                </StepContainer>
                
                <StepContainer styleFleche={{backgroundColor: "#2EBC34"}} imgFleche={hautFleche} containerTitle={"Ma demande"}>
                </StepContainer>

                <StepContainer styleFleche={{backgroundColor: "#2EBC34"}} imgFleche={hautFleche} containerTitle={"Mon dépôt (Optionnel)"}>
                </StepContainer>

                <StepContainer styleFleche={{backgroundColor: "#3399FE"}} imgFleche={basFleche} containerTitle={"Mon rendez-vous visioconférence"}>
                    <PrendreRdv />
                </StepContainer>
            </div>
        </div>
    );
}
export default RdvStep