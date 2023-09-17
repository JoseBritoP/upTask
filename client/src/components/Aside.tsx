import { Link } from "react-router-dom"
import { useAuthStore } from "../services/auth"
const Aside = () => {
  const { profile } = useAuthStore();
  return (
    <aside className="w-full md:w-60 lg:w px-5 py-6  bg-gray-400 text-gray-50 md:border-black dark:bg-slate-700 border-b-2 dark:border-gray-400 md:border-r-2">
      <p className="text-xl font-black md:text-2xl text-center"> Hola {profile.username}</p>
      <Link to="create-proyect" className="bg-sky-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg">Nuevo proyecto</Link>
    </aside>
  )
}

export default Aside