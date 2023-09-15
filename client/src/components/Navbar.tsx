import { useThemeValue } from "../utils/theme"
// import useSession from "../hooks/useSession"
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../services/auth";
const Navbar = () => {

  const navigate = useNavigate();
  const { clearProfile,profile } = useAuthStore();
  const handleLogout = () =>{
    navigate('/');
    clearProfile();
  }

  // const { session } = useSession();
  
  const {value,handleChangeTheme} = useThemeValue();

  return (
    <div className="flex w-full justify-evenly sm:justify-between items-center pt-1 pb-4 sm:px-6 border-b-2 border-gray-950 dark:border-gray-300">
      <Link to={"/"}>
        <h1 className="text-sky-600 font-black text-2xl sm:text-4xl uppercase text-center transition-transform ease-out duration-200 hover:text-sky-500 hover:cursor-pointer">Up<span className="text-slate-700 dark:text-slate-300 dark:hover:text-slate-50">Task</span></h1>
      </Link>
      <div className="flex items-center justify-evenly w-1/2 sm:w-1/3 font-semibold hover:cursor-pointer dark:text-gray-100">
      {!profile || profile.id === "" ? 
        ( // Usuario no logueado
        <div className="flex gap-1 sm:gap-2 md:gap-3 justify-center items-center">
          <Link to={"/register"}>
            <h2 className="hover:underline">Registrarse</h2>
          </Link>
          <Link to={"/login"}>
            <h2 className="hover:underline">Login</h2> 
          </Link>
          <button className="self-end p-4 text-center font-bold text-slate-900 dark:text-slate-200 focus:text-sky-900 active:text-sky-900 hover:cursor-pointer" onClick={handleChangeTheme}>{value}</button>
        </div>
        ) : profile.userType === 'client' ? 
        (
          // Usuario logueado y es cliente
          <div className="flex gap-1 sm:gap-2 md:gap-3 justify-center items-center">
            <Link to={"/proyects"}>
              <h2 className="hover:underline">Proyectos</h2>
            </Link>
            <button className="hover:underline" type="button" onClick={() => handleLogout()}>Logout</button>
            <button className="self-end p-4 text-center font-bold text-slate-900 dark:text-slate-200 focus:text-sky-900 active:text-sky-900 hover:cursor-pointer" onClick={handleChangeTheme}>{value}</button>
          </div>
        ) : 
        (
          // Usuario logueado y es admin
          <div className="flex gap-1 sm:gap-2 md:gap-3 justify-center items-center">
            <Link to={"/admin"}>
              <h2 className="hover:underline">Panel</h2>
            </Link>
            <button className="hover:underline" type="button" onClick={() => handleLogout()}>Logout</button>
            <button className="self-end p-4 text-center font-bold text-slate-900 dark:text-slate-200 focus:text-sky-900 active:text-sky-900 hover:cursor-pointer" onClick={handleChangeTheme}>{value}</button>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Navbar
