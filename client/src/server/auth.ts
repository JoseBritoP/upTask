// import axios from "../libs/axios";
import axios from 'axios'
export const registerRequest = async(username:string,email:string,password:string) => {
  return axios.post(`${import.meta.env.VITE_API}/auth/register/`,{
    username,email,password
  })
}

export const confirmAccountRequest = async(token:string|undefined) => {
  return axios.get(`${import.meta.env.VITE_API}/auth/${token}`)
};

export const confirmEmailToChangePassword = async(email:string|undefined) =>{
  return axios.post(`${import.meta.env.VITE_API}/auth/forget-password/`,{
    email
  })
}