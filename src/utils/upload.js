import axiosInstance from "../api/axios";
import { axiosInst } from "../api/axios";
import { deleteToken,  getToken, setToken } from "../api/cookies";
import axios from "axios";


export  async function uploadFileGFA(file) {
    const host = import.meta.env.VITE_API_HOST;
    const formData = new FormData();
    formData.append("file", file);
    const token =  getToken();
    // const token = "eyJraWQiOiJoSDJkMlU2T1hpMGFlVlRpc2FUd0toQnFNcGFYd2dBUzdGb3NraDB1R2k0PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJkNDg4YTRiOC1hMGUxLTcwNWYtMmFhZi04OTI0NmQwZWMxODAiLCJjb2duaXRvOmdyb3VwcyI6WyJHRkEtdGVzdC1ncm91cC1mb3ItczMtYWNjZXNzIl0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX3Zpb0NZaE1wMyIsImNsaWVudF9pZCI6IjdmNW11MmxsbGRjcjhwdGhrNnUzODRubHJuIiwib3JpZ2luX2p0aSI6IjkzNDM1NzNmLTkyZTctNDc2Ni04MTcwLWIxNDViNDljOWViOCIsImV2ZW50X2lkIjoiZmVkYWQ3OTItY2RhNC00ZmM0LWE2ZTEtM2Y2ODYyOWIwMmI2IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTc0MTAyNjE1NCwiZXhwIjoxNzQxMDI5NzU0LCJpYXQiOjE3NDEwMjYxNTQsImp0aSI6IjFjMTgwYzViLTQ3ODUtNGEzNi05MmFmLTc5OTUyMTBhZGQzZSIsInVzZXJuYW1lIjoiYW5neWU5NSJ9.dxJBw3JKRDSfLv_6OnVdp42_VN_U-mdngD2mfCfbWGsCuFQcGbAceU1LbOt4RglB6ZEXiZv4_Z4SWzpcBEOk4zRWqux0j4aM3xW8_VkbvGOpWmKtCE-zuPIl3aDgqkjUFfF06BivNx0I4b_WnK3QMPAB6Ss4n-GkETyjp8ZYUxWdDpGmLdCu1Uhw-X6dFE7EZ5XJeR7dnri_rCDm_KPx0jlfCmYXl3bUJWy-zaeCB0fV3uJBUXDFoaqtQNOB_xnay4yr9aYR9kUpN9LWRIUyxpbIX8e8iD4h3HKGq7qsTu0SRLAyxzHRxj954H1SagkFv2UmXPyky3LyVXgQhdCAUg"


// Using Fetch Data

    // try {
    //     const res = await fetch(host, 
    //         {
    //         method: "POST",
    //         body: formData,
    //         headers: {
    //             "Authorization": `Bearer ${token}`,
    //             "Content-Type": "multipart/form-data",
    //              "Accept": "*/*",
    //       "Access-Control-Allow-Origin": "*",
    //       'Access-Control-Allow-Credentials':true
    //           }, 
    //         })
    //         const data = await res.json();
    //         console.log("generate url", data)
    //         return data;
        
    // } catch (error) {
    //     console.log("Error capturado",error.message)
    //     return error    
    // }


// Using Axios Instance

    // const ax =axios.create({
    //       baseURL: host,
    //       withCredentials: true,
    //       headers: {
    //         "Authorization": "JWT "+ token,
    //         // "Authorization": `Bearer ${token}`,
    //         'Content-Type': 'multipart/form-data',
    //         "Accept": "*/*",
    //       "Access-Control-Allow-Origin": "*",
    //       'Access-Control-Allow-Credentials':true
    //       },
    //   })
     
    //   try {
    //     const response = await 
    //     ax.post("/customers-file", {
    //         body: formData 
    //       })
    //       .then(response => {
    //               console.log('Data:', response.data);
    //               return response.data
    //           })
    //           .catch(error => {
    //               console.error('Error en axios:', error);
    //               return error
    //           });

    //     return  response
        
    //   } catch (error) {
    //     console.log("ctach", error)
        
    //   }
      
    




// Using Imported axios


    const  response = await axios.post(host,
       formData, 
       { 
        headers:
         {"Content-Type": "multipart/form-data",  
          "Authorization": "Bearer " + token,
        }
        }
      ).then(response => {
          console.log('Data:', response.data);
          return response.data
      })
      .catch(error => {
          console.error('Error en axios:', error);
          return error
      });

      return response

    
        
}

   
    



