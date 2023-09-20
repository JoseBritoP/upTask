/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react"
import { getProyectDetail } from "../server/proyect"
import { useProyectStore } from "../services/proyect"
import { useParams } from "react-router-dom"

const useProyectDetail = () => {
  const { id } = useParams<{id:string}>();
  const { setDetail, clearDetail } = useProyectStore();

  if(!id) return;
  useEffect(() => {
    try {
      const proyectDetail = async(id:string) =>{
        const proyectDetail = await getProyectDetail(id);
        setDetail(proyectDetail.data);
      }
      proyectDetail(id)
    } catch (error:any) {
      return `${error.response.data.error}`
    }
    return ()=>{
      clearDetail()
    }
  },[id,clearDetail,setDetail])
  
}

export default useProyectDetail
