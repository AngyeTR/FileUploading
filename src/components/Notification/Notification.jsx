import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { VscLoading } from "react-icons/vsc";
import { useFileStore } from "../../store/fileStore";
import "./Notification.css"
import { deleteToken, getToken } from "../../api/cookies";

function Notification(){
    const result = useFileStore( state => state.uploadingResult);
    const setResult = useFileStore( state => state.setUploadingResult);
    const setFile = useFileStore(state => state.setFile);
    const updateModalStatus = useFileStore( state => state.updateModalStatus);
    const token = getToken();

    function handleClick(){
        setResult(null);
        setFile(null);
        updateModalStatus(false);  
    }
    const verification = result;

    function render(){
        if(!verification){
            return(
                <>
                    <VscLoading className="loadingIcon"/>
                    <p className="notification-text">Loading</p>
                </>
            )  } 
        else if(verification && verification.message == "File uploaded successfully!"){
            return(
                <>
                    <FaRegCheckCircle className="sucessIcon"/>
                    <p className="notification-text">El archivo ha sido enviado</p>
                    <button onClick={handleClick}>Cerrar</button>
                </>  
                )
        }  
        else {
            if(verification && verification.status == 401 ){
                deleteToken()
            }
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

