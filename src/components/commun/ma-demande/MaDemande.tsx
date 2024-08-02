import './MaDemande.css'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import InscriptionDemande from './Inscription-demande/InscriptionDemande';
import IdentificationDemande from './IdentificationDemande/IdentificationDemande';



const MaDemande = () => {

    const [currentComponent, setCurrentComponent] = useState<String>('Identification');
    const [activeButton, setActiveButton] = useState<String>('Identification');


    const handleInscriptionClick = () => {
        setCurrentComponent('Inscription');
        setActiveButton('Inscription');

    };

    const handleIdentifierClick = () => {
        setCurrentComponent('Identification');
        setActiveButton('Identification');

    };

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Naviguer vers la page précédente   
    };

    const getButtonStyle = (buttonType: string) => ({
        width: activeButton === buttonType ? "100%" : "0%",
        height: "2px",
        backgroundColor: activeButton === buttonType ? "#00BDBB" : "#ffffff",
        transition: "width 0.5s",
        marginTop: "10px",
    });


    return ( <>
        <div className="title-back">
            <h2 className="title-creation"></h2>                
            <a className="style-retour-demande" onClick={handleGoBack}>&lt; Retour</a>
            <div className="container-creation-demande">

            <div className='liens-demande'>
                <div className='button-demande-style'>
                    <button className='style-link-inscription' onClick={handleInscriptionClick}>
                        S'inscrire
                    </button>
                    <div style={getButtonStyle('Inscription')}></div>
                </div>
                <div className='button-demande-style'>
                    <button className='style-link-inscription' onClick={handleIdentifierClick}>
                        S'identifier
                    </button>
                    <div style={getButtonStyle('Identification')}></div>
                </div>
            </div>

            {currentComponent === 'Inscription' && <InscriptionDemande />}
            {currentComponent === 'Identification' && <IdentificationDemande />}

            </div> 
        </div>
        </>
    )
};

export default MaDemande