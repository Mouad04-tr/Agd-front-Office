import './RecapFormulaire.css';
import {useState, useEffect} from 'react';
import { getClient } from '../../../../../ApiService';
import PackName from '../../../../../enums/PackName';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import StepClient from '../../../../../enums/StepClient';
import { SetNewStep } from '../../../../../ApiService';


interface typeDonnees {
   nom: string|undefined;
   prenom: string|undefined ;
   dateNaissance: string|undefined;
   cin: string|undefined ;
   adresseResidence: string|undefined;
   ville: string|undefined;
   email: string|undefined;
   tel: string|undefined; 
   pack: PackName|undefined;
   adressAgence: string|undefined;
}
function RecapFormulaire(){

    const [donneesClient, setDonneesClient] = useState<typeDonnees>
    ({ nom: '', prenom: '', dateNaissance: '', cin: '', adresseResidence: '', ville: '',
        email: '', tel: '', pack: undefined, adressAgence: ''
    });

    let navigate = useNavigate();

    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      e.preventDefault();
      SetNewStep(StepClient.RECAP_STEP);
      navigate("/effectuer-paiement");
   }


    useEffect(() => {
      getClient()
          .then(data =>{
              setDonneesClient({
                  nom: data.nom,
                  prenom: data.prenom,
                  dateNaissance: data.dateNaissance,
                  cin: data.cin ,
                  adresseResidence: data.adresseResidence,
                  ville: data.ville,
                  email: data.email ,
                  tel: data.phone,
                  pack: data.pack,
                  adressAgence: data.agence
              });
          })
          .catch(error => console.error(error));
  }, []);

    return (
        <div className='style-update-formulaire'>
            <p className="p-update-formulaire">
               Vérifiez vos données
            </p>
            <form >
                <div className="style-form-update">
                   <div className="style-form-lign ">
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="prenom">Prénom</label>
                           <br />
                           <input className='input-form-update' type='text' name='prenom' value={donneesClient.prenom} readOnly/>
                           <br />
                        </div>
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="nom">Nom</label>
                           <br />
                           <input className='input-form-update' type='text' name='nom' value={donneesClient.nom} readOnly />
                           <br />
                        </div>
                    </div>
                    <div className="style-form-lign ">
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="email">Email</label>
                           <br />
                           <input className='input-form-update' type='text' name='email' value={donneesClient.email} readOnly/>
                           <br />
                        </div>
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="tel">Numéro de téléphone</label>
                           <br />
                           <input className='input-form-update' type='text' name='tel' value={donneesClient.tel} readOnly/>
                           <br />
                        </div>
                    </div>
                    <div className="style-form-lign ">
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="naissance">Date de naissance</label>
                           <br />
                           <input className='input-form-update' type='text' name='naissance' value={donneesClient.dateNaissance} readOnly/>
                           <br />
                        </div>
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="adresse">Adresse de résidence</label>
                           <br />
                           <input className='input-form-update' type='text' name='adresse' value={donneesClient.adresseResidence} readOnly/>
                           <br />
                        </div >
                    </div>
                    <div className="style-form-lign ">
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="cin">CIN</label>
                           <br />
                           <input className='input-form-update' type='text' name='cin' value={donneesClient.cin} readOnly />
                           <br />
                        </div>
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="ville">Ville</label>
                           <br />
                           <input className='input-form-update' type='text' name='ville' value={donneesClient.ville} readOnly/>
                           <br />
                        </div>
                    </div>
                    
                    <div className="style-form-lign">
                    <div style={{width:"50%"}}>
                           <label className='label-form-update' id="pack">Pack</label>
                           <br />
                           <input className='input-form-update' type='text' name='pack' value={donneesClient.pack} readOnly/>
                           <br />
                        </div>
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="agence">Agence a proximite</label>
                           <br />
                           <input className='input-form-update' type='text' name='agence' value={donneesClient.adressAgence} readOnly/>
                           <br />
                        </div>
                    </div>
                </div>
                <Button className='button-suivre' type='submit' onClick={handleClick}>Valider</Button>
            </form>
        </div>
    )
}
export default RecapFormulaire