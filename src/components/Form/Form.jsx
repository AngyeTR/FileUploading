import { uploadFileGFA } from "../../utils/upload";
import { useFileStore } from "../../store/fileStore"
import Drop from "../Drop/Drop";
import "./Form.css";
import { ENABLED_TYPES } from "../../utils/api";

function Form(){
    const file = useFileStore( state => state.file)
    const updateResponse = useFileStore( state => state.setUploadingResult)
    const updateModalStatus = useFileStore( state => state.updateModalStatus)
    const type = file ? file?.type.split("/")[1] : null;
   
    const handleSubmit = async e =>{
        e.preventDefault();
        updateModalStatus(true);
        const response = await uploadFileGFA(file);
        console.log("response", response)
        updateResponse(response); 
    }
    const enabled = ENABLED_TYPES.includes(type)
    

    return (
        <>
         <form onSubmit={handleSubmit} className="form">
            <Drop/>
            <button disabled={!enabled} className="btn">Enviar</button>
        </form>
        </>
       
    )
;}

export default Form;
