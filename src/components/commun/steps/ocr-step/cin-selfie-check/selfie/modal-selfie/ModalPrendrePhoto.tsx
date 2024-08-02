import { useRef, useCallback, useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from "antd";
import Webcam from 'react-webcam';
import ModalValidateUpload from '../../cin/modal-validate-upload/ModalValidateUpload';

interface ModalPrendrePhotoProps {
    show: boolean;
    onHide: () => void;
}

function ModalPrendrePhoto({ show, onHide }: ModalPrendrePhotoProps) {
    
    const webcamRef = useRef<Webcam>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [imageSrcObject, setImageSrcObject] = useState<File | null>(null);
    const [ModalValidateUploadShow, setModalValidateUploadShow] = useState<boolean>(false);

    const convertBase64ToBlob = (base64String: string): Blob => {
        const byteCharacters = atob(base64String.split(',')[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob( [byteArray], { type: 'image/jpeg' });
    };

    useEffect(() => {
        if (imageSrc) {
            setModalValidateUploadShow(true);
        }
    }, [imageSrc]);

    const capture = useCallback(() => {
        const newImageSrc = webcamRef.current?.getScreenshot();
        if (newImageSrc) {
            const blob = convertBase64ToBlob(newImageSrc);
            const file = new File([blob], 'photo.jpg', { type: 'image/jpeg' });
            setImageSrc(newImageSrc);
            setImageSrcObject(file);
        }
    }, [webcamRef]);

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton style={{height:'60px'}}>
                    <p className='title-upload'>Veuillez prendre une photo</p>
                </Modal.Header>
                <Modal.Body>
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={450}
                            height={200}
                            
                        />
                </Modal.Body>
                <Modal.Footer className='modal-footer-upload'>
                        <Button className="modal-button-upload" style={{ paddingBottom: "7%" }} onClick={capture}>
                            Prendre une photo
                        </Button>
                </Modal.Footer>
            </Modal>

            <ModalValidateUpload 
                show={ModalValidateUploadShow} 
                onHideValidate={() => setModalValidateUploadShow(false)} 
                onHidePrendrePhoto={onHide}
                fileCharger={imageSrc} 
                fileObject={imageSrcObject} 
                cinUpload={"selfie"}
                titleReUpload={"Reprendre une photo"}
            />
        </>
    );
}

export default ModalPrendrePhoto;
