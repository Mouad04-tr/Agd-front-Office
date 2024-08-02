import CardProfil from "./card-profil/CardProfil";
import CardPack from "./card-pack/CardPack";
import etudiant from '../../../assets/etudiant-img.png';
import PackName from "../../../enums/PackName";

function Etudiant() {
    return <div className='ouvrir-compte-root'>
        <CardProfil image={etudiant}>
            <span className="title1-ouvrir-compte">Etudiant résidant au Maroc</span>
            <span className="title2-ouvrir-compte">Profitez de votre compte bancaire en ligne</span>
        </CardProfil>
        <div className="pack-container">
            <CardPack packName="Pack Jeune Campus" 
                packElemStyle={{backgroundColor: "rgb(15, 82, 151)", marginLeft: "10%"}}
                packTitleStyle={{color: "#ffffff"}}
                lienTo ="/verification-email" 
                valueNomPack={PackName.JEUNE_CAMPUS}
            />
        </div>
        </div>

}
export default Etudiant