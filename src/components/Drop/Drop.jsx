import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { useFileStore } from "../../store/fileStore"
import "./Drop.css";

function Drop(){
    const setFile = useFileStore( state => state.setFile)

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles[0])
        setFile(acceptedFiles[0])
      }, []);
      
    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({onDrop});
    
    return (
        <div {...getRootProps()} className="dropArea">
            <input {...getInputProps()} />
                {
                isDragActive ?
            <p className="text">Suelte el archivo aquí ...</p> :
            <p className="text">Arrastre y suelte el archivo aquí, o haga click para seleccionar el archivo</p>
                }
        </div>
    );}

export default Drop;
