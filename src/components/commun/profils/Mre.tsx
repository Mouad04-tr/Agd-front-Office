import CardProfil from "./card-profil/CardProfil";
import CardPack from "./card-pack/CardPack";
import mre from "../../../assets/mre-img.png";
import { useState } from 'react'
import './Mre.css'
import MreForm from "./choisir-offre/ChoisirOffre"
import PackName from "../../../enums/PackName";

function Mre() {

    const [showForm, setShowForm] = useState(false);

    const handlePackClick = (packName: string) => {
        if (packName === "Pack Blue" || packName === "Pack First") {
            setShowForm(true);
        } else {
            setShowForm(false);
        }
    };

    return <>
       <div className='ouvrir-compte-root'>
        <CardProfil image={mre}>
            <span className="title1-ouvrir-compte">Marocain résidant à l'étranger</span>
            <span className="title2-ouvrir-compte">
                Découvrez nos packs avantageux pour ouvrir un compte bancaire au Maroc
            </span>
        </CardProfil>
        <div className="pack-container">
            <CardPack packName="Pack Blue" 
                packElemStyle={{backgroundColor: "rgb(33, 129, 209)"}}
                packTitleStyle={{color: "#ffffff"}}
                lienTo ="/MRE-ouvrir-un-compte-bancaire-au-maroc" 
                valueNomPack={PackName.BLEU}
                onClick={() => handlePackClick("Pack Blue")}
            />
            <CardPack packName="Pack First" 
                packElemStyle={{backgroundColor: "rgb(19, 26, 30)"}}
                packTitleStyle={{color: "#ffffff"}}
                lienTo ="/MRE-ouvrir-un-compte-bancaire-au-maroc" 
                valueNomPack={PackName.FIRST}
                onClick={() => handlePackClick("Pack Blue")}
            />
        </div>
      </div>
      {showForm &&
        <div className='container-step-mre'> 
            <h1 className="h1-style-mre">Choisissez votre offre</h1>
            <MreForm />
        </div>
    } </>
}
export default Mre