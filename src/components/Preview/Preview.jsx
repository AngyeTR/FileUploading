import { useFileStore } from "../../store/fileStore";
import "./Preview.css";
import { ENABLED_TYPES } from "../../utils/api";

function Preview(){
    const file = useFileStore( state => state.file)
    
    function render(){
        const type = file ? file?.type.split("/") : null;

        if(ENABLED_TYPES.includes(type[1])){
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
        } else 
            return (
                <>
                    <p className="fileName">{file.name }</p>
                    <p className="notAva">Formato no compatible</p>
                    <p className="notAva">Por favor verifique que el archivo tenga alguno de los siguientes formatos:</p>
                    <p>
                    {
                        ENABLED_TYPES.map((type, index) => <span key={index}> {type} </span>)
                    }
                    </p>
                   
                    </>
            )
  
    }

    return (
        <div className="preview-container">
         {file && ( render())}
        </div>
    )
;}

export default Preview;
