import * as React from 'react';
import './SelectionService.css'
import Services from '../../../../../enums/Services';

interface Props_prodServ {
    ToLink: () => void;
    onPrevStep: () => void;
}

const Prod_Service: React.FC<Props_prodServ> = ({ ToLink, onPrevStep }) => {
    const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

    const handleCardCheckboxChange = (optionName: Services) => {
        setSelectedOptions(prevOptions => {
            if (prevOptions.includes(optionName)) {
                return prevOptions.filter(option => option !== optionName); // Désélectionner la carte si elle est déjà sélectionnée
            } else {
                return [...prevOptions, optionName]; // Sélectionner la carte si elle n'est pas déjà sélectionnée
            }
        });
    };


    React.useEffect(() => {
        if (selectedOptions.length > 0) {
            sessionStorage.setItem("selectedOptions2", JSON.stringify(selectedOptions));
          }else if(selectedOptions.length===0){
            sessionStorage.removeItem("selectedOptions2");
        }
    }, [selectedOptions]);

    return (
        <div className="Container_mre">
            <div className="just-inf_mre">
                <h5>Produits et services supplémentaires</h5>
            </div>
            <div className="Triplette_mre">
                <div className="card1_mre">
                    <span>
                        <input
                            type="checkbox"
                            name="card1"
                            value="option1"
                            onChange={() => handleCardCheckboxChange(Services.CARNET)}
                        />
                    </span>
                    <span>
                        <h6 className="h6_mre_serv">Compte sur carnet</h6>
                        <p className='p_mre_serv'>Votre compte de dépôt à vue rémunéré vous permet de constituer progressivement une épargne, Aucun frais de gestion de ce compte n’est prélevé. Les intérêts sont servis sur un capital maximum de 400 000 Dhs</p>
                    </span>
                </div>
                <div className="card2_mre">
                    <span>
                        <input
                            type="checkbox"
                            name="card2"
                            value="option2"
                            onChange={() => handleCardCheckboxChange(Services.SALAMA)}
                        />
                    </span>
                    <span>
                        <h6 className='h6_mre_serv'>Salama (assistance)</h6>
                        <p className='p_mre_serv'>Salama peut être souscrite sous forme de contrat individuel ou de forfait familial incluant les personnes à la charge de l’assuré, à partir de 275 Dhs TTC/an. Pour y souscrire, nous vous recommandons d’effectuer un premier versement dans le cadre de ce parcours, ou de veiller à ce que votre compte soit créditeur. Votre produit d’assistance aux personnes, avec des prestations en cas de décès, de panne, d’accident ou d’hospitalisation de l’assuré. Vous pouvez y souscrire à partir de votre portail BMCE Direct (dès que vous recevrez vos accès)</p>
                    </span>
                </div>
                <div className="card3_mre">
                    <span>
                        <input
                            type="checkbox"
                            name="card3"
                            value="option3"
                            onChange={() => handleCardCheckboxChange(Services.DABA_TRANSFER)}
                        />
                    </span>
                    <span>
                        <h6 className='h6_mre_serv'>DabaTransfer - Application de Transfert de BMCE EuroServices</h6>
                        <p className='p_mre_serv'>DabaTranfer est la nouvelle Application lancée par notre filiale européenne BMCE EuroServices vous permettant de transférer votre argent en ligne aux meilleures conditions de sécurité, de coût et de délai. L’application vous permet de réaliser vos transferts vers votre compte BANK OF AFRICA au Maroc à tout moment et sans avoir à vous déplacer en agence. Téléchargez l’application DabaTransfer à partir de <a href='https://play.google.com/store/apps/details?id=co.dabasfer'>APPLE STORE</a> ou <a href='https://play.google.com/store/apps/details?id=co.dabasfer'>ANDROID STORE</a> et bénéficiez de la gratuité des transferts jusqu’au 31 Décembre 2024.</p>
                    </span>
                </div>
            </div>
            <div className="flex">
                <span><button className="prev_mre" onClick={onPrevStep}>Retour</button></span>
                <span><button className="next_mre" onClick={ToLink}>Suivant</button></span>
            </div>
        </div>
    );
};
export default Prod_Service;