import LoginForm from "../../components/LoginForm/LoginForm";
import { useFileStore } from "../../store/fileStore";
import Modal from "../../components/Modal/Modal";
import Notification from "../../components/Notification/Notification";
import "./Login.css"

function LoginPage() {
  const modalStatus = useFileStore(state => state.modalStatus)
   
  return (
    <div className="login-page-container" >
      <LoginForm/>  
      {
        modalStatus && (
        <Modal>
            <Notification mode="login" />
        </Modal>
        ) 
     }   
    </div>
  )
}

export default LoginPage; 