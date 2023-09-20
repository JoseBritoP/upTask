// import { useParams } from "react-router-dom"
import useProyectDetail from "../hooks/useProyectDetail"
import { useProyectStore } from "../services/proyect";
const ProyectDetail = () => {

  // const { id } = useParams<{id:string}>();
  // console.log(id)

  useProyectDetail();

  const { proyectDetail } = useProyectStore();

  // proyectDetail._id
  // proyectDetail.name
  // proyectDetail.limitDate
  // proyectDetail.client
  // proyectDetail.description
  // proyectDetail.collaborators
  // proyectDetail.tasks
  // proyectDetail.creator

  const collaboratorIconPlus = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-emerald-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
</svg>

  const collaboratorIconMinus = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
</svg>

  const taskPlus = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-emerald-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
</svg>

  const taskMinus = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
</svg>




  return (
    <div className="dark:bg-slate-900 w-full p-4 md:w-4/5 xl:w-2/3 rounded-lg border-2 dark:border-gray-300 gap-2" key={proyectDetail._id}>
      <h1 className="text-2xl font-bold uppercase dark:text-sky-500 pl-0 pt-0 p-3">{proyectDetail.name}</h1>
      <p className="text-xl dark:text-blue-500">Fecha de entrega: <span className="dark:text-gray-100 text-lg">{proyectDetail.limitDate?.split("T")[0]}</span></p>
      <p className="text-xl dark:text-blue-500">Cliente: <span className="text-lg dark:text-gray-100">{proyectDetail.client}</span></p>
      <p className="text-xl dark:text-blue-500">Descripción <br/> <span className="text-lg dark:text-gray-100">{proyectDetail.description}</span></p>
      {/* Colaboradores */}
      <div className="flex flex-col gap-2 mt-2">
        <h2 className="text-xl dark:text-blue-500">Colaboradores</h2>
        {proyectDetail.collaborators && proyectDetail.collaborators.length === 0 ? (
          <div className="flex w-full justify-evenly items-center gap-4">
            <p>Agrega colaboradores</p>
            <button>{collaboratorIconPlus}</button>
            <button>{collaboratorIconMinus}</button>
          </div>
        ) : (
          <>
          
          </>
        )}
      </div>
      {/* Tasks */}
      <div className="flex flex-col gap-2 mt-2">
        <h2 className="text-xl dark:text-blue-500">Tareas</h2>
          {proyectDetail.tasks && proyectDetail.tasks.length === 0 ? (
            <div className="flex justify-evenly items-center gap-2">
              <p>Añade tareas</p>
              <button>{taskPlus}</button>
              <button>{taskMinus}</button>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="flex w-1/2 justify-start gap-4">
                <button>{taskPlus}</button>
                <button>{taskMinus}</button>
              </div>
              <ol>
                <li>
                  Tarea 1
                </li>
                <li>
                  Tarea 2
                </li>
              </ol>
            </div>
          )}
      </div>
    </div>
  )
}

export default ProyectDetail
