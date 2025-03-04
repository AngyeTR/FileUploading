import { RiLogoutCircleRLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { signOut } from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';
import { deleteToken, getToken, setToken } from "../../api/cookies";
import "./Logout-btn.css"


function LogoutBtn() {
  Hub.listen('auth', (data) => {
    if(data.payload.event == 'signedOut'){
      setShowBtn(false)
      }
      else if(data.payload.event == 'signedIn'){
        setShowBtn(true)
      }
    });

  const [showBtn, setShowBtn] = useState(false)
  const access = getToken()
  useEffect(()=>{
    access && setShowBtn(true)
  }, []  )
  
  const   handleLogout = async () =>{
    setShowBtn(false)
    deleteToken()
    await signOut()
    console.log(signOut())
   
  }

  return (
      // <div  className="logout-container" >
      <div  className={showBtn ? "logout-container" : "hidden-container"} >
        <div onClick={handleLogout} className="logout-btn">
        <RiLogoutCircleRLine className="logout-icon"/>
            <p className="btn-text">Salir </p>   
        </div> 
      </div>
  )
}

export default LogoutBtn;