import './CinCheck.css'
import uploadLogo from '../../../../../../../assets/uploadlogo.png';
import lien from '../../../../../../../assets/lien.png';
import camera from '../../../../../../../assets/camera.png';
import { Dropdown, Button} from "antd";
import { useState } from 'react';
import ModalUpload from '../modal-upload/ModalUpload';

interface DropdownCinCheckProps {
  titleDesc : string;
  cinUpload : string;
}

function DropdownCinCheck({titleDesc, cinUpload}: DropdownCinCheckProps) {

    const [modalUploadShow, setModalUploadShow] = useState<boolean>(false);


    const items = [
        {
          key: '1',
          label: (
            <Button className="dropdown-upload-cin" style={{marginBottom: "-1%"}} onClick={() => setModalUploadShow(true)}>
                    <div className="cercle-div-upload-logo">
                        <img className="upload-logo" src={lien} alt='upload logo' />
                    </div>
                    <span style={{color:"#000000"}}>Attacher ma piéce</span>
            </Button>
          ),
        },
        {
          key: '2',
          label: (
            <Button className="dropdown-upload-cin" style={{marginBottom: "-4%"}}>
              <div className="cercle-div-upload-logo" >
                <img className="upload-logo" src={camera} alt='upload logo' />
              </div>
              <span style={{color:"#000000"}}>Prendre en Photo</span>
            </Button>
          ),
        },
      ];

    return(
        <>
            <Dropdown menu={{ items, }} placement="top">
                <Button className="button-upload-cin">
                    <div className="cercle-div-upload-logo" style={{backgroundColor: "rgb(202, 227, 255)"}}>
                        <img className="upload-logo" src={uploadLogo} alt='upload logo' />
                    </div>
                    <span style={{color:"#3399FE"}}>{titleDesc}</span>
                </Button>
            </Dropdown>

            <ModalUpload show={modalUploadShow} onHide={() => setModalUploadShow(false)} cinUpload={cinUpload} />

        </>
    )

}
export default DropdownCinCheck