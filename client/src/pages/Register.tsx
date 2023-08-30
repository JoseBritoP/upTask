import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <>
    <h1 className="text-sky-600 font-black text-4xl uppercase text-center">Crea tu cuenta {<br></br>} para administrar tus <span className="text-slate-700">proyectos</span>
    </h1>
    <form action="" className="my-10 bg-white shadow rounded-lg px-10 py-5">
      {/* Username */}
      <div className="my-5">
        <label htmlFor="username" className="uppercase text-gray-600 block text-xl font-bold hover:cursor-pointer">Username</label>
        <input type="text" name="username" id="username" placeholder="Username" className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black" />
      </div>
      {/* Email */}
      <div className="my-5">
        <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold hover:cursor-pointer">Email</label>
        <input type="email" name="email" id="email" placeholder="Email de registro" className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black" />
      </div>
      {/* Password */}
      <div className="my-5">
        <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold hover:cursor-pointer">Password</label>
        <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña password" className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black" />
      </div>
      <div className="my-5">
        <label htmlFor="repeat-password" className="uppercase text-gray-600 block text-xl font-bold hover:cursor-pointer">Repetir password</label>
        <input type="password" name="repeat-password" id="repeat-password" placeholder="Repite tu contraseña" className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black" />
      </div>
      <input type="submit" value="Iniciar sesión" className="bg-sky-700 w-full py-3 text-white rounded uppercase font-bold hover:bg-sky-600 hover:cursor-pointer transition-colors 300 ease-in mb-5" />
    </form>
    <nav className="lg:flex lg:justify-between">
      <Link to={"/"} className='block text-center my-5 text-slate-500 uppercase text-sm font-bold'>¿Ya tienes una cuenta? Inicia sesión</Link>
      <Link to={"/forget-password"} className='block text-center my-5 text-slate-500 uppercase text-sm font-bold'>¿Olvidaste tu contraseña?</Link>
    </nav>
  </>
  )
}

export default Register