import { Link } from "react-router-dom"
import { useAuthStore } from "../services/auth"
const Aside = () => {
  const { profile } = useAuthStore();
  return (
    <aside className=" flex flex-col justify-center md:justify-start items-center w-full md:w-60 lg:w px-4 py-6  bg-gray-400 text-gray-50 md:border-black dark:bg-slate-700 border-b-2 dark:border-gray-400 md:border-r-2 md:border-b-0">
      <p className="text-lg font-black md:text-xl text-center"> Hola {profile.username}</p>
      <Link to="create-proyect" className="bg-sky-600 w-2/3 sm:1/2 md:w-full  p-1 md:p-3 text-white uppercase font-bold block mt-2 md:mt-5 text-center rounded-lg">Nuevo proyecto</Link>
    </aside>
  )
}

export default Aside