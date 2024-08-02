import { ReactNode } from 'react';
import './CardProfil.css'


interface CardProfilProps {
    image: string;
    children: ReactNode;
}

function CardProfil ({ image, children }: CardProfilProps) {
    return (
        <>
            <img className="img-ouvrir-compte" src={image} alt='etudiant-img' />
            <div className='titles-ouvrir-compte'>
                {children}
            </div>
        </>
    )
}
export default CardProfil