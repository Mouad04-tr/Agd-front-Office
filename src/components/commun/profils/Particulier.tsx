import CardProfil from "./card-profil/CardProfil";
import CardPack from "./card-pack/CardPack";
import particulier from "../../../assets/particulier-img.png"
import PackName from "../../../enums/PackName";


function Particulier() {
    return  <div className='ouvrir-compte-root'>
        <CardProfil image={particulier}>
            <span className="title1-ouvrir-compte">Particulier résidant au Maroc</span>
            <span className="title2-ouvrir-compte">
                Ouvrir un compte bancaire en ligne n’a jamais été aussi simple
            </span>
        </CardProfil>
        <div className="pack-container">
        <CardPack packName="Pack Azur" 
            packElemStyle={{backgroundColor: "rgb(1, 41, 83)"}}
            packTitleStyle={{color: "#ffffff"}}
            lienTo ="/verification-email" 
            valueNomPack={PackName.AZUR}
        />
        <CardPack packName="Pack Gold" 
            packElemStyle={{backgroundColor: "rgb(201, 160, 43)"}}
            packTitleStyle={{color: "#ffffff"}}
            lienTo ="/verification-email" 
            valueNomPack={PackName.GOLD}
        />
        <CardPack packName="Pack Platinum" 
            packElemStyle={{backgroundColor: "rgb(140, 141, 144)"}}
            packTitleStyle={{color: "#003D7C"}}
            lienTo ="/verification-email" 
            valueNomPack={PackName.PLATINUM}
        />
        </div>
    </div>
}
export default Particulier