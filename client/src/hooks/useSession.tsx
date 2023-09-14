import { useState, useEffect } from "react"
import { getProfile } from "../server/auth"
const useSession = () => {
  const [session,setSession] = useState('')
  useEffect(()=>{
    const session = async () => {
      try {
        const { data } = await getProfile();
        // console.log(data)
        setSession(data.id)
      } catch (error) {
        console.log(error)
        setSession('');
      }
    };
    session()
  },[])
  return { session }
}

export default useSession
