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
              <div className="flex flex-col flex-wrap border-2 gap-4 py-4 px-6 rounded-lg" key={proyect.id}>
                 <h2>Nombre: {proyect.name}</h2>
                 <h2>Descripción: {proyect.description}</h2>
                 <h3>Fecha de entrega:{proyect.limitDate?.split('T')[0]}</h3>
                 <p> Cliente: {proyect.client}</p>
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
