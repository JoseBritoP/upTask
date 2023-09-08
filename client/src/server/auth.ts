import axios from "../libs/axios";

export const registerRequest = async(username:string,email:string,password:string) => {
  return axios.post(`/auth/register/`,{
    username,email,password
  })
}