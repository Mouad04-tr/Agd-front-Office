import * as React from "react";
import "./SelCpt.css";

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
    // Stocker les options sélectionnées dans sessionStorage si au moins une option est sélectionnée
    if (selectedOptions.length > 0) {
      sessionStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));
    }else if(selectedOptions.length===0){
      sessionStorage.setItem("selectedOptions "," ");
    }
    onNextStep(); // Appel de la fonction pour passer à l'étape suivante
  };
  const handlePrev = () => {
    onPrevStep(); // Appel de la fonction pour revenir à l'étape précédente
  };

  return (
    <div className="Container">
      <div className="just-inf">
        <h3>Découvrez également nos offres à souscrire en unitaire</h3>
        <p>
          Choisissez le type de compte qui convient à vos besoins et bénéficiez
          de de la gratuité des frais de tenue de compte pendant 6 mois. Dès le
          7ème mois, vos frais de tenue de compte s’élèveront à seulement :
        </p>
      </div>
      <div className="Triplette">
        <div className="card1">
          <span>
            <input type="checkbox" name="card1" value="Dhs" onChange={handleCheckboxChange} />
          </span>
          <span>
            <h6>Compte chèque en Dhs – 0 Dhs pendant 6 mois</h6>
            <p>30 Dhs HT/trimestre ou resteront gratuits lorsque le solde moyen trimestriel créditeur est supérieur ou égal à 20 000 Dhs.</p>
          </span>
        </div>
        <div className="card2">
          <span>
            <input type="checkbox" name="card2" value="Dhs convertible" onChange={handleCheckboxChange} />
          </span>
          <span>
            <h6>Compte chèque en Dhs convertible – 0 Dhs pendant 6 mois</h6>
            <p>45 Dhs HT/trimestre ou gratuits lorsque le solde moyen trimestriel créditeur est supérieur ou égal à 50 000 Dhs</p>
          </span>
        </div>
        <div className="card3">
          <span>
            <input type="checkbox" name="card3" value="Devises" onChange={handleCheckboxChange} />
          </span>
          <span>
            <h6>Compte en devises – 0 Dhs*</h6>
            <p>Ce compte vous est proposé gratuitement</p>
          </span>
        </div>
      </div>
      <div className="flex">
        <span><button className="prev" onClick={handlePrev}>Retour</button></span>
        <span><button className="next" onClick={handleNext}>Suivant</button></span>
      </div>
    </div>
  );
};

export default Select_Cpt;
