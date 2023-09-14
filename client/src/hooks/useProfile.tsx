/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

// import { useAuthStore } from '../services/auth';
import { getProfile } from '../server/auth';


const useProfile = () => {
  const [user,setUser] = useState({
    id: '',
    username:'',
    email: '',
    proyects:[]
  })

  const [load,setLoad] = useState(true);

  // const token = useAuthStore.getState().token;
  useEffect(()=>{
    const auth = async () =>{
      try {
        const {data} = await getProfile();
        setUser(data)
        // console.log(data)
      } catch (error:any) {
        // alert(error.response||'error desconocido')
        console.log(error)
      }
      setLoad(false)
    }
    auth()
  },[])

  return { user, load }
}

export default useProfile
