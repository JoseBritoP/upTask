import { useProyectStore } from "../services/proyect"
const Proyects = () => {

  const { proyects } = useProyectStore();
  console.log(proyects)
  return (
    <>
      <h1 className="text-xl font-black md:text-2xl text-black dark:text-white">Proyectos</h1>
      <div className="flex flex-col flex-wrap justify-center items-center">
      { proyects.length === 0 ? (
        <p> No tienes proyectos terminados</p>
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
