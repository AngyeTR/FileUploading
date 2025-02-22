import ReactDOM from "react-dom";
import "./modal.css"

function Modal( {children}){
   return ReactDOM.createPortal(
    <div className="modalBackground">
         {children}
     </div>
  , 
   document.getElementById("modal")
  );
}

export default Modal;