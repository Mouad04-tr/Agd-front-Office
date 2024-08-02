import Modal from 'react-bootstrap/Modal';

import './ModalUpload.css'
import { useEffect, useState } from 'react';
import lien from '../../../../../../../assets/lien.png';

import ModalValidateUpload from '../modal-validate-upload/ModalValidateUpload';



interface ModalUploadProps {
  show: boolean;
  onHide: () => void;
  cinUpload: string;
}

function ModalUpload({show, onHide, cinUpload}: ModalUploadProps) {

    const [file, setFile] = useState<string>();
    const [ fileObject, setFileObject ] = useState<File>();

    const [ModalValidateUploadShow, setModalValidateUploadShow] = useState<boolean>(false);

    useEffect(() => {
        if(file){
            setModalValidateUploadShow(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file])
 
    
    function handleModalUpload(e: React.ChangeEvent<HTMLInputElement>): void {
      if (e.target.files && e.target.files[0] ) {
        setFileObject(e.target.files[0]); // Store File object for further processing
        setFile(URL.createObjectURL(e.target.files[0])); // Store URL for display
        e.target.value = ''
      }
    }

    return (  <>
      <Modal
        show={show}
        onHide={onHide}
        size="md"
        style={{height: '100%' ,width: '101.1%'}}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className="style-modal-upload">
            <img className="logo-modal-upload" src={lien} alt='upload logo' />
            <p className='title-upload'>Charger ma piéce</p>
            <p className='p-upload'>Votre document doit etre place horizontalement <br />
              et avec un éclairage optional</p>
          </div> 
        </Modal.Body>
        <Modal.Footer className='modal-footer-upload'>
          <label className="modal-button-upload" htmlFor="upload-cin">Charger ma piéce</label>
          <input type="file" id="upload-cin" name="file1" style={{display: "none"}} onChange={handleModalUpload}/>
        </Modal.Footer>
      </Modal>

      <ModalValidateUpload show={ModalValidateUploadShow} onHideValidate={() => setModalValidateUploadShow(false)} 
      fileCharger={file} fileObject={fileObject} cinUpload={cinUpload} titleReUpload={"Recharger un autre document"}/>

      </>
  

       

    );
  }
export default ModalUpload