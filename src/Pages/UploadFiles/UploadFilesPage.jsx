import { useFileStore } from "../../store/fileStore";
import Form from "../../components/Form/Form"
import Notification from "../../components/Notification/Notification";
import Preview from "../../components/Preview/Preview";
import Modal from "../../components/Modal/Modal";
import "./UploadFilesPage.css"
import ExpiredSession from "../../components/SesionExpired/ExpiredSession"
import Requirements from "../../components/Requirements/Requirements";
import { getToken, setToken } from "../../api/cookies";

function UploadFilesPage({user}) {
  const token = getToken();
  const modalStatus = useFileStore(state => state.modalStatus);

  function render(){
    if(!token){
      return (
        <div className="page-container">
                  <ExpiredSession/>
        </div>
      )
  } else  
   return (
    <div className="page-container">
    <div className="uploading-container">
      <Form/>
     <Preview/>
     {
        modalStatus && (
        <Modal>
            <Notification />
        </Modal>
        )
     }
    </div> 
    <Requirements/>

    </div>

   )
}

  return render() 
}

export default UploadFilesPage;
