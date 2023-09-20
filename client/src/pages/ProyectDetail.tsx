import { useParams } from "react-router-dom"
const ProyectDetail = () => {

  const { id } = useParams<{id:string}>();
  console.log(id)

  return (
    <div>
      Proyect Detail      
    </div>
  )
}

export default ProyectDetail
