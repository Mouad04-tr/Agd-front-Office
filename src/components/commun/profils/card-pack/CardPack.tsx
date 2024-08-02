import { Link } from 'react-router-dom'
import { CSSProperties } from 'react';

import './CardPack.css'

interface CardPackProps {
    packName: string;
    packElemStyle: CSSProperties;
    packTitleStyle: CSSProperties;
    lienTo: string;
    valueNomPack: string;
    onClick?: () => void;// Ajoutez la prop onClick
}

function CardPack ({ packName, packElemStyle, packTitleStyle, lienTo, valueNomPack, onClick }: CardPackProps) {

    const setPackName = (nomPack: string) => {
        sessionStorage.setItem('nomPack', nomPack)
    }

    const handleClick = () => {
        if (onClick) {
            onClick(); // Appeler la fonction onClick si elle est définie
        }
        setPackName(valueNomPack);
    }
    return <>
        <Link to={lienTo} className="pack-link" onClick={handleClick}>
            <div className="pack-element" style={packElemStyle}>
                <p className="title-pack" style={packTitleStyle}>{packName}</p>
            </div>
        </Link>
    </>
}
export default CardPack


