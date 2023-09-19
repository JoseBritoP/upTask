import { useProyectStore } from "../services/proyect"
const Proyects = () => {

  const { proyects } = useProyectStore();
  console.log(proyects)
  return (
    <>
      <h1 className="md:self-start text-xl font-black md:text-2xl pt-1 pb-4 text-black dark:text-white">Proyectos</h1>
      <div className="flex flex-row flex-wrap justify-center items-center">
      { proyects.length === 0 ? (
        <p className="text-black dark:text-gray-100 font-semibold text-lg md:text-xl"> No tienes proyectos creados</p>
        ) : (
          <div className="flex flex-wrap gap-10 p-4">
            {proyects.map((proyect)=>(
              <div className="flex flex-col flex-wrap border-2 gap-4 py-4 px-6 rounded-lg text-black dark:text-gray-50 bg-gray-100 dark:bg-transparent border-black dark:border-gray-400" key={proyect.id}>
                 <h2 className="text-xl font-bold text-sky-600">Nombre: <span className="text-black dark:text-gray-100 font-semibold">{proyect.name}</span></h2>
                 <div>
                 <h2 className="text-xl font-bold text-sky-600">Descripción</h2>
                  <p className="text-black dark:text-gray-100 font-semibold">{proyect.description}</p>
                 </div>
                 <h3 className="text-xl font-bold text-sky-600">Fecha de entrega: <span className="text-black dark:text-gray-100 font-semibold">{proyect.limitDate?.split('T')[0]}</span></h3>
                 <h3 className="text-xl font-bold text-sky-600">Cliente: <span className="text-black dark:text-gray-100 font-semibold">{proyect.client}</span></h3>
              </div>
            ))}
          </div>
        )
      }
      </div>
    </>
  )
}

export default Proyects
