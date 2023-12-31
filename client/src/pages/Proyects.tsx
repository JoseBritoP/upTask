import { useProyectStore } from "../services/proyect"
import ProyectCard from "../components/ProyectCard";
import useProyects from "../hooks/useProyects";
import AlertComponent from "../components/Alert";
const Proyects = () => {

  const { message, error } = useProyects();
  const { proyects } = useProyectStore();
  
  return(
    <>
      <h1 className="md:self-start text-xl font-black md:text-2xl pt-1 pb-4 text-sky-600 dark:text-white">Proyectos</h1>
      <div className="flex w-full flex-row justify-center items-center">
        { error ? (
          <AlertComponent error={error} message={message}/>
        ) : proyects.length === 0 ? (
          <p className="text-black dark:text-gray-100 font-semibold text-lg md:text-xl"> No tienes proyectos creados</p>
        ) : (
          <div className="flex flex-col flex-wrap md:flex-row justify-center gap-2 p-4 w-full ">
            {proyects && proyects.map((proyect) => (
              <ProyectCard
               key={proyect._id} 
               name={proyect.name}
               description={proyect.description} 
               limitDate={proyect.limitDate} 
               client={proyect.client} _id={proyect._id || ""} collaborators={proyect.collaborators} tasks={proyect.tasks} 
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Proyects
