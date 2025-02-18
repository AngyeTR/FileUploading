import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { VscLoading } from "react-icons/vsc";
import { useFileStore } from "../../store/fileStore";
import "./Notification.css"

function Notification(props){
    const mode = props.mode;
    const result = useFileStore( state => state.uploadingResult);
    const setResult = useFileStore( state => state.setUploadingResult);
    const setFile = useFileStore(state => state.setFile);
    const updateModalStatus = useFileStore( state => state.updateModalStatus);
    const setAccessToken = useFileStore(state => state.setAccessToken)
    const loginAttemp = useFileStore(state => state.loginAttemp);
    const setLoginAttemp = useFileStore(state => state.setLoginAttemp);

    const navigate = useNavigate();

    function handleClick(){
        if (mode =="login"){ 
              setLoginAttemp(null);
              navigate("/")
        }
        setResult(null);
        setFile(null);
        updateModalStatus(false);  
    }
    const verification = mode== "login" ? loginAttemp : result;

    function render(){
        console.log("mode", mode, verification)
        if(!verification){
            console.log("opcion 1")
            return(
                <>
                    <VscLoading className="loadingIcon"/>
                    <p className="notification-text">Loading</p>
                </>
            )  }
        // else if(verification.url){
            else if(verification && !verification.status && mode!="login"){
            console.log("verifi", verification)
            return(
                <>
                    <FaRegCheckCircle className="sucessIcon"/>
                    <p className="notification-text">El archivo ha sido enviado</p>
                    <button onClick={handleClick}>Cerrar</button>
                </>  
                )
        }  
        else if(verification.status){
            setAccessToken(verification.token)
            updateModalStatus(false);
             navigate("/uploadFile")
            return(
                <>
                </>  
                )
        }  
        
        else {
            console.log("opcionc")
        
            return(  
                <>
                     <FaRegCircleXmark className="sucessIcon"/>
                     <p className="notification-text">Algo salió mal, por favor intente de nuevo</p>
                     <button onClick={handleClick}>Cerrar</button>
                </>
            )}
    }
    
    return(
        <div className="notification-container">
            {
                render()
            }
        </div>
    )
}

export default Notification;

