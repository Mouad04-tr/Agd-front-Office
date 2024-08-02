import React, { useState, FormEvent, useEffect } from 'react';
import './SaisirAgence.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { saisirAgencyStep } from '../../../../../ApiService';
import SaveInfoClientStatus from '../../../../../enums/SaveInfoClientStatus';
import NotificationModal from '../../../notification-modal/NotificationModal';

import { agencesParVille} from './SaisirAgenceService';
import { updateMap } from './SaisirAgenceService';

function SaisirAgence() {

  let navigate = useNavigate();

  const [ville, setVille] = useState<string>();
  const [agence, setAgence] = useState<string>();


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [mssgErreur, SetMssgErreur] = useState<string>();

  useEffect(() => {
    // Mettre à jour la carte lorsqu'une agence ou une ville est sélectionnée
    updateMap(ville!, agence!);
  }, [ville, agence]);

  useEffect(() => {
    const iframe = document.getElementById('google-map') as HTMLIFrameElement;
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.56000646063!2d-7.669394967446278!3d33.57240323327038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1714463226028!5m2!1sfr!2sma";
    iframe.src = mapSrc;
    // eslint-disable-next-line  
  },[])

  const handleVilleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedVille = event.target.value;
    setVille(selectedVille);
    setAgence('');
  };

  const handleAgenceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAgence = event.target.value;
    setAgence(selectedAgence);
  };

  function handleSubmitSaisirAgence(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    saisirAgencyStep(ville!, agence!)
      .then(data => {
        if (data === SaveInfoClientStatus.SUCCESSFUL) {
          navigate("/recap-donnees");
        } else if (data === SaveInfoClientStatus.ERROR) {
          SetMssgErreur("something went wrong !!");
          handleShow();
        }
      })
      .catch(error => console.error(error));
  }

  return (
    <>
      <div className="container">
        <div className='style-saisir-agence'>
          <p className="p-agence">Choisissez l'agence la plus proche</p>
          <form onSubmit={handleSubmitSaisirAgence}>
            <label className='label-agence'>Ville</label>
            <br />
            <select value={ville} onChange={handleVilleChange} aria-label="Default select example" className='formSelectStyle' required>
              <option value="">Sélectionnez une ville</option>
              <option value="Casablanca">Casablanca</option>
              <option value="Rabat">Rabat</option>
              <option value="Marrakech">Marrakech</option>
            </select>

            <br />

            <label className='label-agence'>Agence à proximité</label>
            <br />
            <select value={agence} onChange={handleAgenceChange} aria-label="Default select example" className='formSelectStyle' required>
              <option value="">Sélectionnez une agence</option>
              {ville && agencesParVille[ville].map(
                (agence, index) => (
                  <option key={index} value={agence}>{agence}</option>
                ))
              }
            </select>
            <br />
            <Button className='button-saisir-agence' type='submit'>Suivant</Button>
          </form>
        </div>
        <div className="map-style">
          <iframe id="google-map"
            width="400" 
            height="250"
            style={{ border: 0}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <NotificationModal show={show} onHide={handleClose} modalColor={{ backgroundColor: "rgb(251 0 46)" }}>
        {mssgErreur}
      </NotificationModal>
    </>
  );
};

export default SaisirAgence;
