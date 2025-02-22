import { useFileStore } from "../../store/fileStore";
import Form from "../../components/Form/Form"
import Notification from "../../components/Notification/Notification";
import Preview from "../../components/Preview/Preview";
import Modal from "../../components/Modal/Modal";
import "./UploadFilesPage.css"
import LogoutBtn from "../../components/Logout-btn.jsx/Logout-btn";
import ExpiredSession from "../../components/SesionExpired/ExpiredSession"
import Requirements from "../../components/Requirements/Requirements";

function UploadFilesPage() {
  const modalStatus = useFileStore(state => state.modalStatus);
  const accessToken = useFileStore( state => state.accessToken)

  function render(){
    if(!accessToken){
      return (
        <div className="page-container">
                  <ExpiredSession/>
        </div>
      )
  } else 
   return (
    <div className="page-container">
      <LogoutBtn/>
    <div className="uploading-container">
      <Form/>
     <Preview/>
     {
        modalStatus && (
        <Modal>
            <Notification mode="uploading"/>
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
