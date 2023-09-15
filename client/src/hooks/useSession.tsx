/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react"
import { getProfile } from "../server/auth"
const useSession = () => {
  const [session,setSession] = useState({
    id:'',
    username:'',
    email:'',
    userType: ''
  })
  useEffect(()=>{
    const session = async () => {
      try {
        const { data } = await getProfile();
        // console.log(data)
        setSession(data)
      } catch (error:any) {
        // console.log(error)
        setSession({
          id:'',
          username:'',
          email:'',
          userType: '',
        });
      }
    };
    session()
  },[])
  return { session }
}

export default useSession
