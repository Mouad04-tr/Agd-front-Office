import '../../cin/cin-check/CinCheck.css';
import camera from '../../../../../../../assets/camera.png';
import {Button} from "antd";
import { useGlobalState } from '../../../../GlobalState';
import ModalSelfie from '../modal-selfie/ModalSelfie';
import { useState } from 'react';


interface SelfieCheckProps {
    checklogo : string;
    descriptif : string;
}


function SelfieCheck({checklogo, descriptif}: SelfieCheckProps) {

    const { file3} = useGlobalState();

    const [modalSelfieShow, setModalSelfieShow] = useState<boolean>(false);


    return ( <>
        <div className="check-container">
            <div className="check-element1">
                <img className="cin-logo-style" src={checklogo} alt='image1' />
                <p className='title-cin'>{descriptif}</p>
                <p className='format-cin'>Format JPG, PNG ou PDF et un maximun de 5mo</p>
            </div>
            <div className="check-element2" style={{justifyContent:"center"}}>
                {
                    file3? (<p  className='name-img-upload'>Selfie</p>
                    ) : ( <>
                    <Button className="button-upload-cin" onClick={() => setModalSelfieShow(true)} >
                        <div className="cercle-div-upload-logo" style={{backgroundColor: "rgb(202, 227, 255)"}}>
                           <img className="upload-logo" src={camera} alt='camera logo' />
                        </div>
                        <span style={{color:"#3399FE"}}>Prendre mon selfie</span>
                    </Button> 
                    </>)
                }
            </div>
        </div>

        <ModalSelfie show={modalSelfieShow} onHide={() => setModalSelfieShow(false)} />


        </>

    )
    

}
export default SelfieCheck
