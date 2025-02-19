// import { API_HOST, API_KEY, UPLOAD_PRESET } from "./api";
import { useFileStore } from "../store/fileStore";

export  async function login(user, password) {
    const formData = new FormData();
    formData.append("user", user);
    formData.append("password", password);


    try {
        if(user == "123" && password =="1234"){
            const data = {status: "success",
                token: "123"
            }
            return data
        }
        else {
            data = {error: "error"}
            return data
        }
        
        
    } catch (error) {
        console.log("Error capturado",error.message)
        return error    
    }
}