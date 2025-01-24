import { useFileStore } from "../../store/fileStore";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./Logout-btn.css"

function LogoutBtn() {
  const navigate = useNavigate();
  const setAccessToken = useFileStore(state => state.setAccessToken);
  const setLoginAttemp = useFileStore(state => state.setLoginAttemp)

  function handleLogout(){
        setAccessToken(null);
        setLoginAttemp(null)
        navigate("/")
  }

  return (
    
      <div className="logout-container">
        <div onClick={handleLogout} className="logout-btn">
        <RiLogoutCircleRLine className="logout-icon"/>
            <p className="btn-text">Salir </p>   
        </div> 
      </div>
  )
}

export default LogoutBtn;