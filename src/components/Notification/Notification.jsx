import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { VscLoading } from "react-icons/vsc";
import { useFileStore } from "../../store/fileStore";
import "./Notification.css"

function Notification(){
    const result = useFileStore( state => state.uploadingResult);
    const setResult = useFileStore( state => state.setUploadingResult);
    const setFile = useFileStore(state => state.setFile);
    const updateModalStatus = useFileStore( state => state.updateModalStatus);

    function handleClick(){
        setResult(null);
        setFile(null);
        updateModalStatus(false);
    }

    function render(){
        if(!result){
            return(
                <>
                    <VscLoading className="loadingIcon"/>
                    <p className="notification-text">Loading</p>
                </>
            )  }
        else if(result.url){
            return(
                <>
                    <FaRegCheckCircle className="sucessIcon"/>
                    <p className="notification-text">El archivo ha sido enviado</p>
                    <button onClick={handleClick}>Cerrar</button>
                </>  
                )
        }   else 
            return(
                <>
                     <FaRegCircleXmark className="sucessIcon"/>
                     <p className="notification-text">Algo salió mal, por favor intente de nuevo</p>
                     <button onClick={handleClick}>Cerrar</button>

                </>
            )
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

