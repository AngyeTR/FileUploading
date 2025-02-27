import axiosInstance from "../api/axios";
import { axiosInst } from "../api/axios";
import { getToken } from "../api/cookies";

export  async function uploadFile(file) {
    const host = import.meta.env.VITE_API_HOST;
    const formData = new FormData();
    formData.append("file", file);
    // formData.append("upload_preset", UPLOAD_PRESET);
    // formData.append("api_key", API_KEY);

    // try {
    //     const res = await fetch(host, 
    //         {
    //         method: "POST",
    //         body: formData })
    //         const data = await res.json();
    //         console.log("generate url", data)
    //         return data;
        
    // } catch (error) {
    //     console.log("Error capturado",error.message)
        
    //     return error    
    // }


    // axiosInstance.post('', {
   



}

export  async function uploadFileGFA(file) {
    const host = import.meta.env.VITE_API_HOST;
    const formData = new FormData();
    formData.append("file", file);
    const token = getToken();
    

    // try {
    //     const res = await fetch(host, 
    //         {
    //         method: "POST",
    //         body: formData,
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //           }, })
    //         const data = await res.json();
    //         console.log("generate url", data)
    //         return data;
        
    // } catch (error) {
    //     console.log("Error capturado",error.message)
    //     return error    
    // }
    axiosInst.post("", {
        body: formData 
      })
      .then(function (response) {
        console.log("success",response);
      })
      .catch(function (error) {
        console.log("error", error);
      });
}

   
    



