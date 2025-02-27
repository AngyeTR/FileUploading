import Cookies from "universal-cookie"

const cookies = new Cookies();

export const  getToken = () => {
    return cookies.get("authentication-token")
}

export const setToken = async (value) => {
     if(value == null){
          cookies.remove('authentication-token', { path: '/' })
     } else {
           cookies.set("authentication-token", value, {path:"/"} )
     }
}

export const deleteToken = () => {
     cookies.remove('authentication-token', { path: '/' })
}