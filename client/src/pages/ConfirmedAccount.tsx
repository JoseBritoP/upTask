import { useState,useEffect } from "react"
import { useParams,Link } from "react-router-dom"
// import { confirmAccountRequest } from "../server/auth"
import axios from 'axios'
const ConfirmedAccount = () => {
  // const [alertMessage,setAlertMessage] = useState(false);
  // const [userConfirm,setUserConfirm] = useState(false);

  const { token } = useParams();
  useEffect(()=>{
    const confirmAccount = async () => {
      try {
        const {data} = await axios.get(`${import.meta.env.VITE_API}/auth/${token}`)
        console.log(data)
        alert(`${data.message}`)
      } catch (error:any) {
        console.log(error.response.data.error)
        alert(error.response.data.error)
      }
    };
    confirmAccount()
  },[token])
  return (
    <>
      <h1 className="text-sky-600 font-black text-4xl uppercase text-center">Confirma tu cuenta para crear tus <span className="text-slate-700 dark:text-slate-100">proyectos</span></h1>
    </>
  )
}

export default ConfirmedAccount
