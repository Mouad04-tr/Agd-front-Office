import './StepContent.css'
import { CSSProperties, ReactNode } from 'react';


interface StepContentProps {
    children?: ReactNode; // Rendre children optionnel
    styleCercle: CSSProperties;
    titleContent: string;
}

function StepContent ({children, styleCercle, titleContent}: StepContentProps) {

    return(
        <>
            <div className="step-content-title">
                <div className="cercle-div" style={styleCercle}></div>
                <h4 className="title-content">{titleContent}</h4>
            </div>
            {children}
        </>
    )
}
export default StepContent