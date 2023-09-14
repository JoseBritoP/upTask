// import axios from "../libs/axios";
import axiosAuth from '../libs/axios'
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

export const newPassword = async(password:string|undefined,token:string|undefined) => {
  return axios.patch(`${import.meta.env.VITE_API}/auth/change-password/${token}`,{
    password
  })
};

export const loginRequest = async(username:string|undefined,password:string) =>{
  return axios.post(`${import.meta.env.VITE_API}/auth/login`,{
    username: username || '' ,
    // email: email || '',
    password
  })
}

export const createProyect = async (name:string,description:string,client:string) =>{
  return axiosAuth.post('/proyect',{
    name,description,client
  })
}