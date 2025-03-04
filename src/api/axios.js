import { getToken} from "./cookies"
import axios from 'axios';

const host = import.meta.env.VITE_API_HOST;
let token = getToken();

const defaultOptions = {
    baseURL: host,
    headers: {
    //   'Content-Type': 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };

const axiosInstance = axios.create(defaultOptions);

// Add a request interceptor to include the cookie in the headers
axiosInstance.interceptors.request.use(function (config) {
    
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  }), error => {
 // Do something with request error
 return Promise.reject(error);
};

export const axiosInst = ()=> {
  token = getToken()
  console.log("Ax token", token)

  axios.create({
    baseURL: host,
    headers: {
      "Authorization": "Bearer "+ token,
      // "Authorization": `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
      
    },
})
} 
 

 export default axiosInstance;