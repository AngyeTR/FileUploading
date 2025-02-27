import "./NotFound.css"
import { useNavigate } from "react-router-dom";

function ExpiredSession() {
  const navigate = useNavigate();
  return (
        <div className="notFound-container">
          <p className="notFound-text">Ups! Parece que este sitio no existe</p>
          <button className="notFound-btn" onClick={()=>navigate("/")}>Ir al Inicio</button>
        </div>
      )
  } 

export default ExpiredSession;
