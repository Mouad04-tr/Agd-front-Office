import CardProfil from "./card-profil/CardProfil";
import CardPack from "./card-pack/CardPack";
import professionnel from "../../../assets/professionnel-img.png"
import PackName from "../../../enums/PackName";



function Professionnel() {
    return <div className='ouvrir-compte-root'>
        <CardProfil image={professionnel}>
            <span className="title1-ouvrir-compte">Professionnels</span>
            <span className="title2-ouvrir-compte">
                Ouvrez votre compte en ligne gratuitement
            </span>
        </CardProfil>
        <div className="pack-container">
            <CardPack packName="Pack Essentiel" 
                packElemStyle={{backgroundColor: "rgb(117, 202, 252)"}}
                packTitleStyle={{color: "#003D7C"}}
                lienTo ="/verification-email" 
                valueNomPack={PackName.ESSENTIEL}
            />
            <CardPack packName="Pack Auto-Entrepreneur" 
                packElemStyle={{backgroundColor: "rgb(1, 41, 83)"}}
                packTitleStyle={{color: "#FFFFFF"}}
                lienTo ="/verification-email" 
                valueNomPack={PackName.AUTO_ENTREPRENEUR}
            />
            <CardPack packName="Pack Classic" 
                packElemStyle={{backgroundColor: "rgb(117, 202, 252)"}}
                packTitleStyle={{color: "#003D7C"}}
                lienTo ="/verification-email" 
                valueNomPack={PackName.CLASSIC}
            />
            <CardPack packName="Pack Gold" 
                packElemStyle={{backgroundColor: "rgb(201, 160, 43)", marginBottom: "5%"}}
                packTitleStyle={{color: "#FFFFFF"}}
                lienTo ="/verification-email" 
                valueNomPack={PackName.GOLD}
            />
            <CardPack packName="Pack Platinum" 
                packElemStyle={{backgroundColor: "rgb(140, 141, 144)", marginBottom: "5%"}}
                packTitleStyle={{color: "#003D7C"}}
                lienTo ="/verification-email" 
                valueNomPack={PackName.PLATINUM}
            />
        </div>
        </div>
}
export default Professionnel