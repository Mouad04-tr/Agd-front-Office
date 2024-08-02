import Modal from 'react-bootstrap/Modal';
import camera from '../../../../../../../assets/camera.png';
import {Button} from "antd";
import ModalPrendrePhoto from './ModalPrendrePhoto';
import { useState } from 'react';

interface ModalSelfieInterface {
  show: boolean;
  onHide: () => void;
}

function ModalSelfie({show, onHide}: ModalSelfieInterface) {

    const [modalPrendrePhotoShow, setModalPrendrePhotoShow] = useState(false);

    function handleModalSelfie(){
        setModalPrendrePhotoShow(true);
        onHide();
    }

    return ( <>
    
        <Modal
        show={show}
        onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className="style-modal-upload">
            <img className="logo-modal-upload" src={camera} alt='camera logo' />
            <p className='title-upload'>Prendre mon selfie</p>
            <p className='p-upload'>Placez votr visage au centre de l'ecran qui s'affiche <br />
               et gardez les yeux ouvertes</p>
          </div> 
        </Modal.Body>
        <Modal.Footer className='modal-footer-upload'>
          <Button className="modal-button-upload" style={{paddingBottom:"7%"}}
            onClick={handleModalSelfie}>
            Prendre une photo
          </Button>
        </Modal.Footer>
      </Modal>

      <ModalPrendrePhoto show={modalPrendrePhotoShow} onHide={() => setModalPrendrePhotoShow(false)}  />


      </>
    )

}
export default ModalSelfie