import { useThemeValue } from "../utils/theme"
// import useSession from "../hooks/useSession"
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import useNavbar from "../hooks/useNavbar";
import NavbarClient from "./NavbarClient";
const Navbar = () => {

  const { profile, handleLogout } = useNavbar()
  const {value,handleChangeTheme} = useThemeValue();

  return (
    <nav className="bg-sky-700 dark:bg-sky-950 flex w-full h-20 justify-evenly sm:justify-between items-center pt-2 pb-3 sm:px-6 border-b-2 border-gray-950 dark:border-gray-300">
      <div>
        <Link to={"/"}>
          <h1 className="text-sky-600 font-black text-3xl sm:text-4xl uppercase text-center transition-transform ease-out duration-200 hover:text-sky-500 hover:cursor-pointer pl-2 pr-4">Up<span className="text-slate-300 hover:text-slate-100 dark:text-slate-300 dark:hover:text-slate-50">Task</span></h1>
        </Link>
      </div>
      {profile.userType === "client" && (
        <div>
          <Searchbar/>
        </div>
      )}
      {/* w-1/2 sm:w-1/6 */}
      <div className="flex items-center justify-evenly font-semibold hover:cursor-pointer dark:text-gray-100">
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
          <>
            <div className="hidden md:flex gap-1 sm:gap-2 md:gap-3 justify-center items-center text-gray-200">
              <Link to={"/proyects"}>
                <h2 className="hover:underline">Proyectos</h2>
              </Link>
              <button className="hover:underline" type="button" onClick={() => handleLogout()}>Logout</button>
              <button className="self-end p-4 text-center font-bold text-slate-900 dark:text-slate-200 focus:text-sky-900 active:text-sky-900 hover:cursor-pointer" onClick={handleChangeTheme}>{value}</button>
            </div>
            <div className="flex flex-col md:hidden gap-1 sm:gap-2 md:gap-3 justify-center items-center">
              <NavbarClient/>
            </div>
          </>
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
    </nav>
  )
}

export default Navbar
