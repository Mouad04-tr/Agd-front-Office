import CardOffer from '../card-offer/CardOffer';
import './ListOffers.css';
import particulier from '../../../assets/particulier-logo.png';
import etudiant from '../../../assets/etudiant-logo.png';
import mre from '../../../assets/mre-logo.png';
import professionnel from '../../../assets/professionnel-logo.png';
import Card from 'react-bootstrap/Card';
import ClientProfil from '../../../enums/ClientProfil';

function ListOffers(){
    return(
        <div className="offre-root">
        <h2 className="title">Choisissez l’offre adaptée à votre profil</h2>
        <div className='container'> 
            <CardOffer lienTo ="/particulier-ouvrir-un-compte-bancaire-en-ligne" valueProfil={ClientProfil.PARTICULIER}>
                <Card.Img className='img-cart' src={particulier} />
                <Card.Body className='body-cart'>
                    <Card.Title className='title-cart'>Particulier résidant au Maroc</Card.Title>
                </Card.Body>
            </CardOffer>
        
            <CardOffer lienTo ="/MRE-ouvrir-un-compte-bancaire-au-maroc" valueProfil={ClientProfil.MRE}>
                <Card.Img className='img-cart' src={mre} />
                <Card.Body className='body-cart'>
                    <Card.Title className='title-cart'>Marocain résidant à l’étranger</Card.Title>
                </Card.Body>
            </CardOffer>

            <CardOffer lienTo ="/compte-bancaire-en-ligne-pour-etudiant" valueProfil={ClientProfil.ETUDIANT}>
                <Card.Img className='img-cart' src={etudiant} />
                <Card.Body className='body-cart'>
                    <Card.Title className='title-cart'>Etudiant résidant au Maroc</Card.Title>
                </Card.Body>
            </CardOffer>

            <CardOffer lienTo ="/professional-offres" valueProfil={ClientProfil.PROFESSIONNEL}>
                <Card.Img className='img-cart' src={professionnel} />
                <Card.Body>
                    <Card.Title className='title-cart prof-title'>Professionnels</Card.Title>
                </Card.Body>
            </CardOffer>
        </div>
    </div>

    );

}
export default ListOffers