import * as React from "react";
import "./SelectionCarte.css";
import CarteName from "../../../../../enums/CarteName";

interface Props_cartt {
  onNextStep: () => void;
  onPrevStep: () => void;
}

const Select_Ct: React.FC<Props_cartt> = ({ onNextStep, onPrevStep }) => {
  const [selectedCards, setSelectedCards] = React.useState<CarteName[]>([]);
  const [isReceptionActivated, setIsReceptionActivated] = React.useState<boolean[]>([]);

  const handleCardCheckboxChange = (cardName: CarteName) => {
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
      sessionStorage.removeItem('selectedCards'); // Supprimer l'entrée si aucune carte n'est sélectionnée
      sessionStorage.removeItem('isReceptionActivated');
    }

  }, [selectedCards, isReceptionActivated]);

  return (
    <div className="Container-Carte_mre">
      <div className="Card_head">
        <div>
          <h6 className="h6_mre_select">Sélectionner votre Carte bancaire</h6>
        </div>
        <div className="twice-cards_mre">
          <div className="card1_mre">
            <span>
              <input
                type="checkbox"
                name="card1"
                value="option1"
                checked={selectedCards.includes(CarteName.FIRST)}
                onChange={() => handleCardCheckboxChange(CarteName.FIRST)}
              />
            </span>
            <span>
              <h6 className="h6_mre_select">Carte First</h6>
              <p className="p_mre_select">300 Dhs HT la 1ère année, puis 600 Dhs HT/an</p>
              {selectedCards.includes(CarteName.FIRST) && (
                <div className="form-check form-switch flex">
                  <span>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="option1"
                      value="Reception1"
                      checked={isReceptionActivated[selectedCards.indexOf(CarteName.FIRST)]}
                      onChange={() => handleReceptionCheckboxChange(selectedCards.indexOf(CarteName.FIRST))}
                    />
                  </span>
                  <span>
                    <p className="under_mre">Réception de la carte à mon adresse</p>
                  </span>
                  <span>
                    <p className="price_mre">80 Dhs HT/Carte</p>
                  </span>
                </div>
              )}
            </span>
          </div>
          <div className="card2_mre">
            <span>
              <input
                type="checkbox"
                name="card2"
                value="option2"
                checked={selectedCards.includes(CarteName.FAMILY)}
                onChange={() => handleCardCheckboxChange(CarteName.FAMILY)}
              />
            </span>
            <span>
              <h6 className="h6_mre_select">Carte Family</h6>
              <p className="p_mre_select">100 Dhs HT, valable 2 ans</p>
              {selectedCards.includes(CarteName.FAMILY) && (
                <div className="form-check form-switch flex">
                  <span>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="option2"
                      value="Reception2"
                      checked={isReceptionActivated[selectedCards.indexOf(CarteName.FAMILY)]}
                      onChange={() => handleReceptionCheckboxChange(selectedCards.indexOf(CarteName.FAMILY))}
                    />
                  </span>
                  <span>
                    <p className="under_mre">Réception de la carte à mon adresse</p>
                  </span>
                  <span>
                    <p className="price_mre">80 Dhs HT/Carte</p>
                  </span>
                </div>
              )}
            </span>
          </div>
          <div className="card3_mre">
            <span>
              <input
                type="checkbox"
                name="card3"
                value="option3"
                checked={selectedCards.includes(CarteName.BLEU_NATIONAL)}
                onChange={() => handleCardCheckboxChange(CarteName.BLEU_NATIONAL)}
              />
            </span>
            <span>
              <h6 className="h6_mre_select">Carte Blue Nationale</h6>
              <p className="p_mre_select">50 Dhs HT la 1ère année, puis 100 Dhs HT/an</p>
              {selectedCards.includes(CarteName.BLEU_NATIONAL) && (
                <div className="form-check form-switch flex">
                  <span>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="option3"
                      value="Reception3"
                      checked={isReceptionActivated[selectedCards.indexOf(CarteName.BLEU_NATIONAL)]}
                      onChange={() => handleReceptionCheckboxChange(selectedCards.indexOf(CarteName.BLEU_NATIONAL))}
                    />
                  </span>
                  <span>
                    <p className="under_mre">Réception de la carte à mon adresse</p>
                  </span>
                  <span>
                    <p className="price_mre">80 Dhs HT/Carte</p>
                  </span>
                </div>
              )}
            </span>
          </div>
          <div className="card4_mre">
            <span>
              <input
                type="checkbox"
                name="card4"
                value="option4"
                checked={selectedCards.includes(CarteName.BLEU_INTERNATIONAL)}
                onChange={() => handleCardCheckboxChange(CarteName.BLEU_INTERNATIONAL)}
              />
            </span>
            <span>
              <h6 className="h6_mre_select">Carte Blue Internationale</h6>
              <p className="p_mre_select">55 Dhs HT la 1ère année, puis 110 Dhs HT/an</p>
              {selectedCards.includes(CarteName.BLEU_INTERNATIONAL) && (
                <div className="form-check form-switch flex">
                  <span>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="option4"
                      value="Reception4"
                      checked={isReceptionActivated[selectedCards.indexOf(CarteName.BLEU_INTERNATIONAL)]}
                      onChange={() => handleReceptionCheckboxChange(selectedCards.indexOf(CarteName.BLEU_INTERNATIONAL))}
                    />
                  </span>
                  <span>
                    <p className="under_mre">Réception de la carte à mon adresse</p>
                  </span>
                  <span>
                    <p className="price_mre">80 Dhs HT/Carte</p>
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
          <button className="prev_mre" onClick={onPrevStep}>
            Retour
          </button>
        </span>
        <span>
          <button className="next_mre" onClick={onNextStep}>
            Suivant
          </button>
        </span>
      </div>
    </div>
  );
};

export default Select_Ct;