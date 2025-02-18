import { API_HOST, API_KEY, UPLOAD_PRESET, API_HOST_TEST } from "./api";

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

export  async function uploadFileGFA(file) {
    const formData = new FormData();
    formData.append("file", file);

    try {
        const res = await fetch(API_HOST_TEST, 
            {
            method: "POST",
            body: formData })
            const data = await res.json();
            console.log("generate url", data)
            return data;
        
    } catch (error) {
        console.log("Error capturado",error.message)
        return error    
    }
}

   
    



