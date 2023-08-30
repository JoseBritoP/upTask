import { Link } from 'react-router-dom'
const ForgetPassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-4xl uppercase text-center">Recuperar el acceso de la <span className="text-slate-700">cuenta</span></h1>
      <form action="" className="my-10 bg-white shadow rounded-lg px-10 py-5">
        
        {/* Email */}
        <div className="my-5">
          <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold hover:cursor-pointer">Email</label>
          <input type="email" name="email" id="email" placeholder="Ingrese la cuenta de email asociada" className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black" />
        </div>
        <input type="submit" value="Enviar instrucciones" className="bg-sky-700 w-full py-3 text-white rounded uppercase font-bold hover:bg-sky-600 hover:cursor-pointer transition-colors 300 ease-in mb-5" />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link to={"/"} className='block text-center my-5 text-slate-500 uppercase text-sm font-bold'>¿Ya tienes una cuenta? Inicia sesión</Link>
        <Link to={"/register"} className='block text-center my-5 text-slate-500 uppercase text-sm font-bold'>¿No tienes una cuenta? Regístrate</Link>
      </nav>
    </>
  )
}

export default ForgetPassword
