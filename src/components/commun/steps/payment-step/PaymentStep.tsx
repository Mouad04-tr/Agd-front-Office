import './PaymentStep.css';
import StepContainer from "../general-container-step/StepContainer";
import EffectuePayment from './effectue-payment/EffectuePayment';
import basFleche from '../../../../assets/fleche-bas.png';
import hautFleche from '../../../../assets/fleche-haut.png';


function PaymentStep() {
    return (
        <div className="title-back">
            <h2 className="title-creation">Ma demande de création de compte</h2>
            <div className="container-creation">

                <StepContainer styleFleche={{backgroundColor: "#2EBC34"}} imgFleche={hautFleche} containerTitle={"Vérification des coordonnées"}>
                </StepContainer>
                
                <StepContainer styleFleche={{backgroundColor: "#2EBC34"}} imgFleche={hautFleche} containerTitle={"Ma demande"}>
                </StepContainer>

                <StepContainer styleFleche={{backgroundColor: "#3399FE"}} imgFleche={basFleche} containerTitle={"Mon dépôt (Optionnel)"}>
                    <EffectuePayment />
                </StepContainer>

                <StepContainer styleFleche={{backgroundColor: "#C4C4C4"}} imgFleche={hautFleche} containerTitle={"Mon rendez-vous visioconférence"}>
                </StepContainer>
            </div>
        </div>
    );
}
export default PaymentStep