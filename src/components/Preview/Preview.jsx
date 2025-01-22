import { useFileStore } from "../../store/fileStore";
import "./Preview.css"

function Preview(){
    const file = useFileStore( state => state.file)
    
    function render(){
        const type = file ? file?.type.split("/") : null;

        if (type[0] == "image"){
            return(
            <>
            <img className="preview" src={URL.createObjectURL(file)} alt=""/>
            <p className="fileName">{file.name }</p>
            </>
                 
            )
        }
        else 
            return( 
                <>
                <p className="notAva">Vista Previa no Disponible</p>
                <p className="fileName">{file.name }</p>
                </>)
    }

    return (
        <div className="preview-container">
         {file && ( render())}
        </div>
    )
;}

export default Preview;
