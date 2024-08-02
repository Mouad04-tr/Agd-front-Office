import './InscriptionDemande.css'
import Button from 'react-bootstrap/Button';
import {FormEvent, useState} from 'react';
import { useNavigate } from "react-router-dom";
import ClientProfil from '../../../../enums/ClientProfil';


function InscriptionDemande() {

   let navigate = useNavigate();
   const [selectedProfil, setSelectedProfil] = useState<string | null>(null);


   function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const profilValue = (e.target as HTMLFormElement)['profil'].value;
      sessionStorage.setItem('profil', profilValue)
      if(profilValue === ClientProfil.PARTICULIER){
         navigate("/particulier-ouvrir-un-compte-bancaire-en-ligne");
      } else if(profilValue === ClientProfil.MRE){
         navigate("/MRE-ouvrir-un-compte-bancaire-au-maroc");
      } else if(profilValue === ClientProfil.ETUDIANT){
         navigate("/compte-bancaire-en-ligne-pour-etudiant");
      } else if (profilValue === ClientProfil.PROFESSIONNEL){
         navigate("/professional-offres");
      }
   }

   const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedProfil(e.target.value);
  };


 return (<>
      <h2 className="h2-demande">Choisissez votre profil</h2>
      <p className="p-demande">Saisissez vos informations pour poursuivre votre demande</p>
      <form onSubmit={handleSubmit}>   
         <input type="radio" name="profil" id="particulier" value={ClientProfil.PARTICULIER} onChange={handleOptionChange} />
         <label htmlFor="particulier" className='label-inscr-demande'>Je suis un marocain/étranger résidant au Maroc</label> 
         <br />
         <input type="radio" name="profil" id="mre" value={ClientProfil.MRE} onChange={handleOptionChange} />
         <label htmlFor="mre" className='label-inscr-demande'>Je suis un marocain résidant à l'étranger</label> 
         <br />
         <input type="radio" name="profil" id="etudiant" value={ClientProfil.ETUDIANT} onChange={handleOptionChange} />
         <label htmlFor="etudiant" className='label-inscr-demande'>Je suis un étudiant résidant au Maroc</label> 
         <br />
         <input type="radio" name="profil" id="professionnel" value={ClientProfil.PROFESSIONNEL} onChange={handleOptionChange} />
         <label htmlFor="professionnel" className='label-inscr-demande'>Je suis un professionnel</label> 
         <br />
         <Button className='button-saisir-email-demande' type='submit' disabled={!selectedProfil}>Suivant</Button>
      </form> 
  </>)
}
export default InscriptionDemande