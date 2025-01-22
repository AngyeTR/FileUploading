import { uploadFile } from "../../utils/upload";
import { useFileStore } from "../../store/fileStore"
import Drop from "../Drop/Drop";
import "./Form.css";

function Form(){
    const file = useFileStore( state => state.file)
    const updateResponse = useFileStore( state => state.setUploadingResult)
    const  updateModalStatus = useFileStore( state => state.updateModalStatus)
    const modalStatus = useFileStore( state => state.modalStatus)
    console.log("antes", modalStatus)
    const handleSubmit = async e =>{
        console.log("casi", modalStatus)

        updateModalStatus(true);
        console.log("despues", modalStatus)

        e.preventDefault();
        const response = await uploadFile(file);
        updateResponse(response);
        
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <Drop/>
            <button disabled={!file} className="btn">Enviar</button>
        </form>
    )
;}

export default Form;
