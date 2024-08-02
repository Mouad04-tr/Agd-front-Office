import { ReactNode , CSSProperties } from 'react';
import './StepContainer.css'

interface StepContainerProps {
    children?: ReactNode; // Rendre children optionnel
    styleFleche: CSSProperties;
    imgFleche: string;
    containerTitle: string;
  }
  
function StepContainer ({ children, styleFleche, imgFleche, containerTitle }: StepContainerProps ) {
    return(<>
        <div className="step-container">
            <div className="cercle-div-fleche" style={styleFleche}>
                <img className="fleche-style" src={imgFleche} alt='fleche' />
            </div>
            <h3 className="step-container-title">{containerTitle}</h3>
        </div>
        {children}
    </>

    )

}
export default StepContainer