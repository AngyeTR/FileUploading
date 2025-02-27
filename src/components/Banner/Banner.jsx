import image from "../../assets/not-logo.png";
import LogoutBtn from "../Logout-btn.jsx/Logout-btn";
import "./Banner.css";
import { getToken } from "../../api/cookies";

function Banner() {
  const token = getToken();
  return (
    <div className="banner-container">
        <img src={image} className="image"/>  
        <LogoutBtn /> 
    </div>
  )
}

export default Banner;
