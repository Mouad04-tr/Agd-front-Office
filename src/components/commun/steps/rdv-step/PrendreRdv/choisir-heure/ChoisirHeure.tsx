import './ChoisirHeure.css'
import React, { useState } from 'react';

interface ChoisirHeureProps {
  availableHeures: string[];
  onHeureSelectionnee: (heure: string) => void;
}

function ChoisirHeure ({availableHeures, onHeureSelectionnee}: ChoisirHeureProps) {

  const [selectedHeure, setSelectedHeure] = useState<string>('');

  const handleClick = (heure: string) => {
    setSelectedHeure(heure);
    onHeureSelectionnee(heure); // Appel de la fonction de rappel avec l'heure sélectionnée
  };

  const colorerDiv = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    target.style.backgroundColor = 'lightblue';
  };

  const unColorerDiv = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    target.style.backgroundColor = '';
  };
  
  return (
    <div className="style-div-heures">
      {availableHeures.map((heure, index) => (
        <div className={`style-div-heure ${selectedHeure === heure ? 'selected' : ''}`}
        key={index} 
        onClick={() => handleClick(heure)} onMouseEnter={colorerDiv} onMouseLeave={unColorerDiv}
        >{heure}</div>
      ))}
    </div>
  );
};

export default ChoisirHeure;
