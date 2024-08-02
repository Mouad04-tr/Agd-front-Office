import React, { useEffect, useState } from "react";
import "./AdosserPack.css";
import PackType from "../../../../../enums/PackType";
import PackName from "../../../../../enums/PackName";

interface AdosserCtProps {
  onNextStep: () => void;
}

const Adosser_Ct: React.FC<AdosserCtProps> = ({ onNextStep }) => {
  const [selectedAccount, setSelectedAccount] = useState(""); // État pour stocker le compte sélectionné
  const [accountSelected, setAccountSelected] = useState(false); // État pour vérifier si une option de compte a été sélectionnée
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false); // État pour afficher les informations supplémentaires
  const [errorMessage, setErrorMessage] = useState(false); // État pour stocker le message d'erreur
  const [ packName, setPackName] = useState<string>("");

  
  useEffect(() => {
    if(sessionStorage.getItem("nomPack") === "BLEU"){
      //setPackName(sessionStorage.getItem("nomPack")!);
      setPackName("BLEU");
    }else if(sessionStorage.getItem("nomPack") === "FIRST"){
      //setPackName(sessionStorage.getItem("nomPack")!);
      setPackName("FIRST");
    } 
  })

  const handleAccountSelection = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = event.target.value;
    setSelectedAccount(selectedValue); // Mettre à jour l'état avec le compte sélectionné
    setShowAdditionalInfo(selectedValue === "Cpt_unitaire"); // Afficher les informations supplémentaires si "Compte unitaire" est sélectionné
    setAccountSelected(true); // Marquer qu'une option de compte a été sélectionnée
    // Stocker le compte sélectionné dans sessionStorage
    if(selectedValue === "Cpt_unitaire"){
      sessionStorage.removeItem("selectedAccount");
      sessionStorage.setItem("nomPack", PackName.AUCUN);      
    }
    else {
      sessionStorage.setItem("nomPack", packName);
      sessionStorage.setItem("selectedAccount", selectedValue);
    }
  };


  const handleAccountSelection1 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = event.target.value;
    setSelectedAccount(selectedValue); // Mettre à jour l'état avec le compte sélectionné
    setShowAdditionalInfo(selectedValue === "Cpt_unitaire"); // Afficher les informations supplémentaires si "Compte unitaire" est sélectionné
    setAccountSelected(false); // Marquer qu'une option de compte a été sélectionnée
    sessionStorage.removeItem("selectedAccount");
    sessionStorage.setItem("nomPack", packName);
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
    <div className="Content_mre">
       {errorMessage && ( // Afficher l'alerte si un message d'erreur est défini
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <div className="flex_mre twice-btn_mre">
        <span className="first-rd_mre">
          <label>
            <input
              type="radio"
              name="horizontal"
              value={packName}
              onChange={handleAccountSelection1}
            />
            Pack {packName}
          </label>
        </span>
        <span className="Second-rd_mre">
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
        <div className="cpt_mre flex_mre">
          <div className="Descrp">
            <p className="p_mre">En choisissant l'option "Compte unitaire", vous souscrivez à des comptes en unitaire sans pack : 
              Compte chèque en Dhs, Compte chèque en Dhs convertible et Compte en devises.</p>
          </div>
          <div>
            {/* Bouton "Suivant" pour passer à l'étape suivante */}
            <button className="btnnn_mre" type="button" onClick={handleNext}>
              Suivant
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="cpt_mre flex_mre">
            <p className="qst_mre">
              Sur quel compte souhaitez-vous adosser votre pack ?
            </p>
            <div className="MAD_mre">
              <label>
                <input
                  type="radio"
                  name="vertical"
                  value={PackType.CHEQUE_DH}
                  onChange={handleAccountSelection}
                />
                Compte chèque en Dhs
              </label>
            </div>
            <div className="MAD-conv_mre">
              <label>
                <input
                  type="radio"
                  name="vertical"
                  value={PackType.DHS_CONV}
                  onChange={handleAccountSelection}
                />
                Compte chèque en Dhs convertibles
              </label>
            </div>
          </div>
         
          <div>
            {/* Bouton "Suivant" pour passer à l'étape suivante */}
            <button className="btnnn_mre" type="button" onClick={handleNext} disabled={!accountSelected}>
              Suivant
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Adosser_Ct;
