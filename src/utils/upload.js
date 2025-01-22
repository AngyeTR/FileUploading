import { API_HOST, API_KEY, UPLOAD_PRESET } from "./api";

export  async function uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("api_key", API_KEY);

    try {
        const res = await fetch(API_HOST, 
            {
            method: "POST",
            body: formData })
            const data = await res.json();
            console.log("generate url", data.url)
            return data;
        
    } catch (error) {
        console.log("Error capturado",error.message)
        return error    
    }
}
   
    



