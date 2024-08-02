import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import './CardOffer.css';

interface CardOfferProps {
    lienTo: string;
    children: ReactNode;
    valueProfil: string;
}

function CardOffer ({lienTo, children, valueProfil}: CardOfferProps){

    const setProfil = (profil: string) => {
        sessionStorage.setItem('profil', profil)
    }

    return (
        <Card className='card-style'>
            <Link to={lienTo} className="card-link" onClick={()=>setProfil(valueProfil)}>
                {children}
                <Card.Footer>                
                   <Button  className='button-cart'>Je découvre l'offre</Button>
                </Card.Footer>
            </Link>
        </Card>
    );

}
export default CardOffer