

export  async function uploadFile(file) {
    const host = import.meta.env.VITE_API_HOST;
    const formData = new FormData();
    formData.append("file", file);
    // formData.append("upload_preset", UPLOAD_PRESET);
    // formData.append("api_key", API_KEY);

    try {
        const res = await fetch(host, 
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

   
    



