import Modal from 'react-bootstrap/Modal';
import { ReactNode, CSSProperties} from 'react'
import './NotificationModal.css';

interface SuccessModalProps {
    children: ReactNode;
    show: boolean;
    onHide: () => void;
    modalColor: CSSProperties;
}

function SuccessModal({children, show, onHide, modalColor}: SuccessModalProps) {

  return (
    <div>
        <Modal className="modalStyleSuccess" show={show} onHide={onHide}>
            <div style={modalColor}>
            <Modal.Header closeButton >
                <Modal.Title className='h6' style={{color: "white"}}>
                    {children}
                </Modal.Title>
            </Modal.Header>
            </div>
        </Modal>

    </div>
  );
}

export default SuccessModal;