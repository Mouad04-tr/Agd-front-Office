import * as React from "react";
import "./SelectionCompte.css";
import PackOffres from "../../../../../enums/PackOffres";

interface Props_cpt {
  onNextStep: () => void;
  onPrevStep: () => void;
}

const Select_Cpt: React.FC<Props_cpt> = ({ onNextStep, onPrevStep }) => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions((prevOptions) => [...prevOptions, value]);
    } else {
      setSelectedOptions((prevOptions) => prevOptions.filter((option) => option !== value));
    }
  };

  const handleNext = () => {
    // Stocker les options sélectionnées dans sessionStorage
    if (selectedOptions.length > 0) {
      sessionStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));
    }else if(selectedOptions.length===0){
      sessionStorage.removeItem("selectedOptions");
    }    
    onNextStep(); // Appel de la fonction pour passer à l'étape suivante
  };

  const handlePrev = () => {
    onPrevStep(); // Appel de la fonction pour revenir à l'étape précédente
  };

  return (
    <div className="Container_mre">
      <div className="just-inf_mre">
        <h3 className="h3_mre_selct">Découvrez également nos offres à souscrire en unitaire</h3>
        <p className="p_mre_selct">
          Choisissez le type de compte qui convient à vos besoins et bénéficiez
          de de la gratuité des frais de tenue de compte pendant 6 mois. Dès le
          7ème mois, vos frais de tenue de compte s’élèveront à seulement :
        </p>
      </div>
      <div className="Triplette_mre">
        <div className="card1_mre">
          <span>
            <input type="checkbox" name="card1" value={PackOffres.CHEQUE_DH} onChange={handleCheckboxChange} />
          </span>
          <span>
            <h6 className="h6_mre_selct">Compte chèque en Dhs – 0 Dhs pendant 6 mois</h6>
            <p className="p_mre_selct">30 Dhs HT/trimestre ou resteront gratuits lorsque le solde moyen trimestriel créditeur est supérieur ou égal à 20 000 Dhs.</p>
          </span>
        </div>
        <div className="card2_mre">
          <span>
            <input type="checkbox" name="card2" value={PackOffres.DHS_CONV} onChange={handleCheckboxChange} />
          </span>
          <span>
            <h6 className="h6_mre_selct">Compte chèque en Dhs convertible – 0 Dhs pendant 6 mois</h6>
            <p className="p_mre_selct">45 Dhs HT/trimestre ou gratuits lorsque le solde moyen trimestriel créditeur est supérieur ou égal à 50 000 Dhs</p>
          </span>
        </div>
        <div className="card3_mre">
          <span>
            <input type="checkbox" name="card3" value={PackOffres.DEVISES} onChange={handleCheckboxChange} />
          </span>
          <span>
            <h6 className="h6_mre_selct">Compte en devises – 0 Dhs*</h6>
            <p className="p_mre_selct">Ce compte vous est proposé gratuitement</p>
          </span>
        </div>
        {/* Ajoutez d'autres options de compte et leurs descriptions ici */}
      </div>
      <div className="flex">
        <span><button className="prev_mre" onClick={handlePrev}>Retour</button></span>
        <span><button className="next_mre" onClick={handleNext}>Suivant</button></span>
      </div>
    </div>
  );
};

export default Select_Cpt;
