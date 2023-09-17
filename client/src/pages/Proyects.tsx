import { useProyectStore } from "../services/proyect"
const Proyects = () => {

  const { proyects } = useProyectStore() 
  return (
    <>
      <h1 className="text-xl font-black md:text-2xl text-black dark:text-white">Proyectos</h1>
      { proyects.length === 0 ? (
        <p> No tienes proyectos terminados</p>
      ) : ({proyects})
      }
    </>
  )
}

export default Proyects
