import { useProyectStore } from "../services/proyect"
const Proyects = () => {

  const { proyects } = useProyectStore();
  console.log(proyects)
  return (
    <>
      <h1 className="text-xl font-black md:text-2xl text-black dark:text-white">Proyectos</h1>
      <div className="flex flex-col flex-wrap justify-center items-center">
      { proyects.length === 0 ? (
        <p className="text-black dark:text-gray-100 font-semibold text-xl"> No tienes proyectos creados</p>
        ) : (
          <>
          
          </>
        )
      }
      </div>
    </>
  )
}

export default Proyects
