import { Link } from "react-router-dom"
const Error = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-sky-600 font-black text-6xl uppercase text-center">Up<span className="text-slate-700 dark:text-slate-300">Task</span></h1>
      <p className="text-slate-700 dark:text-slate-300 text-center mt-40 font-bold text-4xl">La página que estás buscando no existe {':('}</p>
      <nav className="lg:flex lg:justify-evenly mt-60">
        <Link to={"/register"} className='block text-center my-5 text-slate-600 uppercase font-bold dark:text-gray-300 text-2xl hover:text-slate-800 dark:hover:text-gray-100'>¿No tienes una cuenta? Regístrate</Link>
        <Link to={"/"} className='block text-center my-5 text-slate-600 uppercase font-bold dark:text-gray-300 text-2xl hover:text-slate-800 dark:hover:text-gray-100'>¿Ya tienes una cuenta? Inicia sesión</Link>
      </nav>
    </div>
  )
}

export default Error
