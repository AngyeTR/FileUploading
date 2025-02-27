
import "./ExpiredSession.css"
import { useNavigate } from "react-router-dom";
import { signOut } from 'aws-amplify/auth';

function ExpiredSession() {
  // const navigate = useNavigate();
  return (
        <div className="expired-container">
          <p className="error-text">Ups! Parece que no tienes una sesión activa</p>
          <button className="error-btn" onClick={signOut}>Iniciar sesión</button>
        </div>
      )
  } 

export default ExpiredSession;
