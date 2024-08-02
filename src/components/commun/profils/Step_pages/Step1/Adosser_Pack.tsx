import React, { useState } from "react";
import "./adoss.css";

interface AdosserCtProps {
  onNextStep: () => void;
}

const Adosser_Ct: React.FC<AdosserCtProps> = ({ onNextStep }) => {
  const [selectedAccount, setSelectedAccount] = useState(""); // État pour stocker le compte sélectionné
  const [accountSelected, setAccountSelected] = useState(false); // État pour vérifier si une option de compte a été sélectionnée
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false); // État pour afficher les informations supplémentaires
  const [errorMessage, setErrorMessage] = useState(false); // État pour stocker le message d'erreur

  const handleAccountSelection = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = event.target.value;
    setSelectedAccount(selectedValue); // Mettre à jour l'état avec le compte sélectionné
    setShowAdditionalInfo(selectedValue === "Cpt_unitaire"); // Afficher les informations supplémentaires si "Compte unitaire" est sélectionné
    setAccountSelected(true); // Marquer qu'une option de compte a été sélectionnée
    // Stocker le compte sélectionné dans sessionStorage
    sessionStorage.setItem("selectedAccount", selectedValue);
  };


  const handleAccountSelection1 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = event.target.value;
    setSelectedAccount(selectedValue); // Mettre à jour l'état avec le compte sélectionné
    setShowAdditionalInfo(selectedValue === "Cpt_unitaire"); // Afficher les informations supplémentaires si "Compte unitaire" est sélectionné
    setAccountSelected(false); // Marquer qu'une option de compte a été sélectionnée
    sessionStorage.removeItem("selectedAccount");

  };

  

  const handleNext = () => {
    // Vérifier si un compte a été sélectionné
    if (!selectedAccount) {
     window.alert("No Selected Account ");
    } else {
      onNextStep(); // Appel de la fonction pour passer à l'étape suivante
    }
  };
  


  return (
    <div className="Content_first">
       {errorMessage && ( // Afficher l'alerte si un message d'erreur est défini
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <div className="flex twice-btn">
        <span className="first-rd">
          <label>
            <input
              type="radio"
              name="horizontal"
              value="option1"
              onChange={handleAccountSelection1}
            />
            Pack {sessionStorage.getItem("nomPack")}
          </label>
        </span>
        <span className="Second-rd">
          <label>
            <input
              type="radio"
              name="horizontal"
              value="Cpt_unitaire"
              onChange={handleAccountSelection}
            />
            Compte unitaire
          </label>
        </span>
      </div>
      {showAdditionalInfo ? (
        <div className="cpt flex">
          <div className="Descrp">
            <p>En choisissant l'option "Compte unitaire", vous souscrivez à des comptes en unitaire sans pack : 
              Compte chèque en Dhs, Compte chèque en Dhs convertible et Compte en devises.</p>
          </div>
          <div>
            {/* Bouton "Suivant" pour passer à l'étape suivante */}
            <button className="btnnn" type="button" onClick={handleNext}>
              Suivant
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="cpt flex">
            <p className="qst">
              Sur quel compte souhaitez-vous adosser votre pack ?
            </p>
            <div className="MAD">
              <label>
                <input
                  type="radio"
                  name="vertical"
                  value="Dhs"
                  onChange={handleAccountSelection}
                />
                Compte chèque en Dhs
              </label>
            </div>
            <div className="MAD-conv">
              <label>
                <input
                  type="radio"
                  name="vertical"
                  value="Dhs convertibles"
                  onChange={handleAccountSelection}
                />
                Compte chèque en Dhs convertibles
              </label>
            </div>
          </div>
          <div className="Facult">
            <p className="qst">Optionnelle</p>
            <div className="form-check form-switch flex">
              <span>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="option1"
                  value="Reception"
                />
              </span>
              <span>Carte prépayée rechargeable “Family”</span>
              <span>
                <p className="prSt">2Dhs HTC/mois</p>
              </span>
            </div>
            <div className="firstPage form-check form-switch flex">
              <span>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="option2"
                  value="Rec"
                />
              </span>
              <span>Souhaitez-vous recevoir votre carte adossée au pack par courrier ?</span>
              <span>
                <p className="prSt">80Dhs HT / carte</p>
              </span>
            </div>
          </div>
          <div>
            {/* Bouton "Suivant" pour passer à l'étape suivante */}
            <button className="btnnn" type="button" onClick={handleNext} disabled={!accountSelected}>
              Suivant
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Adosser_Ct;
