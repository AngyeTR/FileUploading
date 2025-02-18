import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./LoginForm.css"
import { useFileStore } from "../../store/fileStore";
import { login } from "../../utils/login.js";

function LoginForm(){
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);

    const updateModalStatus = useFileStore( state => state.updateModalStatus)
    const setLoginAttemp = useFileStore(state => state.setLoginAttemp)
 
  const handleSubmit = async (e)=> {
    updateModalStatus(true)
    e.preventDefault();
   const result = await login(user, password)
   console.log("preset") 
   console.log("resul", result)
   setLoginAttemp(result);
   
  
}
  
  return (
    <div className="login-container"  >
        
      <h1 className="login-title">Login</h1>
      <form className="login-form" >
        <input type="text" name="user" placeholder="Usuario" onChange={e=> setUser(e.target.value)}/>
        <input type="password" name="password" placeholder="Contraseña" onChange={e=> setPassword(e.target.value)}/>
        <button onClick={handleSubmit} className="login-btn" disabled={!user || !password}>Ingresar</button>
      </form>
    </div>
  )}
export default LoginForm;
