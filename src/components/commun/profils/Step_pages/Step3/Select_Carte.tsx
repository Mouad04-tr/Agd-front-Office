import * as React from "react";
import "./Sel_Cartt.css";

interface Props_cartt {
  onNextStep: () => void;
  onPrevStep: () => void;
}

const Select_Ct: React.FC<Props_cartt> = ({ onNextStep, onPrevStep }) => {
  const [selectedCards, setSelectedCards] = React.useState<string[]>([]);
  const [isReceptionActivated, setIsReceptionActivated] = React.useState<boolean[]>([]);

  const handleCardCheckboxChange = (cardName: string) => {
    const updatedSelectedCards = [...selectedCards];
    const cardIndex = updatedSelectedCards.indexOf(cardName);
    if (cardIndex === -1) {
      updatedSelectedCards.push(cardName);
      setIsReceptionActivated(prevState => [...prevState, false]); // Ajouter une nouvelle valeur par défaut
    } else {
      updatedSelectedCards.splice(cardIndex, 1); // Supprimer la carte si elle est déjà sélectionnée
      setIsReceptionActivated(prevState => {
        const updatedReceptions = [...prevState];
        updatedReceptions.splice(cardIndex, 1); // Supprimer également l'état de réception correspondant
        return updatedReceptions;
      });
    }
    setSelectedCards(updatedSelectedCards);
  };

  const handleReceptionCheckboxChange = (index: number) => {
    setIsReceptionActivated(prevState => {
      const updatedReceptions = [...prevState];
      updatedReceptions[index] = !updatedReceptions[index];
      return updatedReceptions;
    });
  };

  React.useEffect(() => {
    // Stocker les cartes sélectionnées dans sessionStorage
    if (selectedCards.length > 0) {
      sessionStorage.setItem('selectedCards', JSON.stringify(selectedCards));
      sessionStorage.setItem('isReceptionActivated', JSON.stringify(isReceptionActivated));
    } else if(selectedCards.length===0) {
      sessionStorage.setItem('selectedCards'," "); // Supprimer l'entrée si aucune carte n'est sélectionnée
      sessionStorage.setItem('isReceptionActivated'," ");
    }

  }, [selectedCards, isReceptionActivated]);
  

  return (
    <div className="Container-Carte">
      <div className="Card_head">
        <div>
          <h6>Sélectionner votre Carte bancaire</h6>
        </div>
        <div className="twice-cards">
          <div className="card1">
            <span>
              <input
                type="checkbox"
                name="card1"
                value="option1"
                checked={selectedCards.includes("Carte First")}
                onChange={() => handleCardCheckboxChange("Carte First")}
              />
            </span>
            <span>
              <h6>Carte First</h6>
              <p>300 Dhs HT la 1ère année, puis 600 Dhs HT/an</p>
              {selectedCards.includes("Carte First") && (
                <div className="form-check form-switch flex">
                  <span>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="option1"
                      value="Reception1"
                      checked={isReceptionActivated[selectedCards.indexOf("Carte First")]}
                      onChange={() => handleReceptionCheckboxChange(selectedCards.indexOf("Carte First"))}
                    />
                  </span>
                  <span>
                    <p className="under">Réception de la carte à mon adresse</p>
                  </span>
                  <span>
                    <p className="price">80 Dhs HT/Carte</p>
                  </span>
                </div>
              )}
            </span>
          </div>
          <div className="card2">
            <span>
              <input
                type="checkbox"
                name="card2"
                value="option2"
                checked={selectedCards.includes("Carte Family")}
                onChange={() => handleCardCheckboxChange("Carte Family")}
              />
            </span>
            <span>
              <h6>Carte Family</h6>
              <p>100 Dhs HT, valable 2 ans</p>
              {selectedCards.includes("Carte Family") && (
                <div className="form-check form-switch flex">
                  <span>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="option2"
                      value="Reception2"
                      checked={isReceptionActivated[selectedCards.indexOf("Carte Family")]}
                      onChange={() => handleReceptionCheckboxChange(selectedCards.indexOf("Carte Family"))}
                    />
                  </span>
                  <span>
                    <p className="under">Réception de la carte à mon adresse</p>
                  </span>
                  <span>
                    <p className="price">80 Dhs HT/Carte</p>
                  </span>
                </div>
              )}
            </span>
          </div>
          <div className="card3">
            <span>
              <input
                type="checkbox"
                name="card3"
                value="option3"
                checked={selectedCards.includes("Carte Blue Nationale")}
                onChange={() => handleCardCheckboxChange("Carte Blue Nationale")}
              />
            </span>
            <span>
              <h6>Carte Blue Nationale</h6>
              <p>50 Dhs HT la 1ère année, puis 100 Dhs HT/an</p>
              {selectedCards.includes("Carte Blue Nationale") && (
                <div className="form-check form-switch flex">
                  <span>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="option3"
                      value="Reception3"
                      checked={isReceptionActivated[selectedCards.indexOf("Carte Blue Nationale")]}
                      onChange={() => handleReceptionCheckboxChange(selectedCards.indexOf("Carte Blue Nationale"))}
                    />
                  </span>
                  <span>
                    <p className="under">Réception de la carte à mon adresse</p>
                  </span>
                  <span>
                    <p className="price">80 Dhs HT/Carte</p>
                  </span>
                </div>
              )}
            </span>
          </div>
          <div className="card4">
            <span>
              <input
                type="checkbox"
                name="card4"
                value="option4"
                checked={selectedCards.includes("Carte Blue Internationale")}
                onChange={() => handleCardCheckboxChange("Carte Blue Internationale")}
              />
            </span>
            <span>
              <h6>Carte Blue Internationale</h6>
              <p>55 Dhs HT la 1ère année, puis 110 Dhs HT/an</p>
              {selectedCards.includes("Carte Blue Internationale") && (
                <div className="form-check form-switch flex">
                  <span>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="option4"
                      value="Reception4"
                      checked={isReceptionActivated[selectedCards.indexOf("Carte Blue Internationale")]}
                      onChange={() => handleReceptionCheckboxChange(selectedCards.indexOf("Carte Blue Internationale"))}
                    />
                  </span>
                  <span>
                    <p className="under">Réception de la carte à mon adresse</p>
                  </span>
                  <span>
                    <p className="price">80 Dhs HT/Carte</p>
                  </span>
                </div>
              )}
            </span>
          </div>
          {/* Ajoutez ici d'autres cartes similaires si nécessaire */}
        </div>
      </div>
      <div className="flex">
        <span>
          <button className="prev" onClick={onPrevStep}>
            Retour
          </button>
        </span>
        <span>
          <button className="next" onClick={onNextStep}>
            Suivant
          </button>
        </span>
      </div>
    </div>
  );
};

export default Select_Ct;
