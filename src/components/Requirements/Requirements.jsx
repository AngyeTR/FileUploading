import { useState } from "react";
import { requirements } from "../../utils/fileFormat";
import "./Requirements.css"


 function Requirements(){
    const [showRequirements, setShowRequirements] = useState(false)
    return (
        <div className="requirements-container">
            <a onClick={()=>setShowRequirements(true)} >Consulte Aquí los requisitos que debe cumplir el documento</a>
            <div className={showRequirements ? "requirements-info" : "hidden-container"} >
            <h2 className="requirement-title">Formato de Archivo CSV</h2>
            <p>El archivo CSV debe estar delimitado por punto y coma (;) y tener las siguientes columnas en el siguiente orden: </p>
            <ul>
                  {
                    requirements.map((requirement)=>
                    <li key={Object.keys(requirement)[0]}><p>
                        <strong>{Object.keys(requirement)[0]}</strong>: {Object.values(requirement)[0]}
                        </p></li>
                )
                  }
            </ul>
            <button onClick={()=>setShowRequirements(false)} className="requirement-btn">Ocultar</button>
                <a href="./plantilla.csv" download>
                <button className="requirement-btn">Descargar Plantilla</button></a>
            </div>
        </div>

    )
 }
 
 export default Requirements;

