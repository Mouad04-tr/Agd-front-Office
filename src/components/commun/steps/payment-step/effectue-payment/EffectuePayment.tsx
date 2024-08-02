import './EffectuePayment.css';
import {FormEvent, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { EffectuerPayment } from '../../../../../ApiService';
import { AnnulerPayment } from '../../../../../ApiService';
import NotificationModal from '../../../notification-modal/NotificationModal';
import Button from 'react-bootstrap/Button';
import PaymentStatus from '../../../../../enums/PaymentStatus';



function EffectuePayment() {

    let navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [mssgModalNotification, SetMssgModalNotification] = useState<string>();
    const [modalColor, setModalColor] = useState<string>();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const amountValue = (e.target as HTMLFormElement)['amount'].value;
        console.log(amountValue)
        EffectuerPayment(amountValue)
                .then(data => { 
                    console.log(data)
                    if(data === PaymentStatus.SUCCESS) { 
                        SetMssgModalNotification("Votre paiement a été effectué avec succès. Merci de votre confiance")
                        setModalColor("#0cf569")
                        handleShow();
                        // Attendre 1s vant de naviguer vers une autre page
                        setTimeout(() => {
                            navigate("/prendre-rdv");
                        }, 1000); // 1000 millisecondes = 1 secondes
                    } else if( data === PaymentStatus.AMOUNT_NOT_ACCEPTED) {
                        SetMssgModalNotification("Le montant saisi n'est pas accepté, veuillez saisir un montant entre 100 et 5000")
                        setModalColor("rgb(251 0 46)")
                        handleShow();
                    } else if( data === PaymentStatus.PYMENT_ALREADY_MADE) {
                        SetMssgModalNotification("Une erreur est servenue, vous avez déjà effectué un paiement")
                        setModalColor("rgb(251 0 46)")
                        handleShow();
                    } else if( data === PaymentStatus.ERROR) {
                        SetMssgModalNotification("Une erreur est servenue, veuillez reessaye plus tard")
                        setModalColor("rgb(251 0 46)")
                        handleShow();
                    }
                })
                .catch(error => console.error(error));
    }

    function PasserEtapePayment(){
        AnnulerPayment();
        navigate("/prendre-rdv");
    }


    return( <>
    
                <div className='style-saisir-payment'>
                    <p className="p-payment">
                        Vous pouvez réaliser un premier dépôt (optionnel) sur votre compte par le débit
                        d'une carte bancaire (si vous en disposez) ou ultérieurement par versement dans 
                        n'importe quelle agence BANK OF AFRICA ou sur l'un de nos GAB multifonctions 
                        permettant le versement espece .
                    </p>
                    
                    <form onSubmit={handleSubmit}>
                        <label className='label-payment' id="amount">Montant de dépôt</label>
                        <br />
                        <input className='input-payment' type='text' name='amount' required />
                        <br />
                        <Button className='button-saisir-payment' type='submit'>J'effectue mon versement</Button>
                        <Button className='button-saisir-payment' type='submit' onClick={PasserEtapePayment}>Passer cette étape</Button>
                    </form>
                </div>

                <NotificationModal show={show} onHide={handleClose} modalColor={{backgroundColor: modalColor}}>
                    {mssgModalNotification}
                </NotificationModal>

  
        </>
    )

}
export default EffectuePayment