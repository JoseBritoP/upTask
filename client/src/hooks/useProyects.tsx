/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { getProyects } from '../server/proyect'
import { useProyectStore } from '../services/proyect'
const useProyects = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const { setProyects } = useProyectStore();

  useEffect(()=>{
    const proyects = async () => {
      try {
        const { data } = await getProyects();
        setProyects(data)
        setError(false)
      } catch (error:any) {
        console.log('Error: ',error.response);
        setError(true);
        setMessage(error.response.data.error)
      }
    }
    proyects()
  },[setProyects])

  return { message, error}
}

export default useProyects
