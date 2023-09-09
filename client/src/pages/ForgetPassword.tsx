import { Link } from 'react-router-dom'
import useForgetPassword from '../hooks/useForgetPassword'
import AlertComponent from '../components/Alert';
const ForgetPassword = () => {

   const { formik, message, error, submit } = useForgetPassword();

  return (
    <>
      <h1 className="text-sky-600 font-black text-4xl uppercase text-center">Recuperar el acceso de la <span className="text-slate-700 dark:text-slate-300">cuenta</span></h1>
      <form action="" className="my-10 bg-white shadow rounded-lg px-10 py-5 border-2 dark:bg-slate-950 dark:border-gray-700 dark:border-2" onSubmit={formik.handleSubmit}>
        
        {/* Email */}
        <div className="my-5">
          <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold dark:text-gray-200 hover:cursor-pointer">Email</label>
          <input type="email" name="email" id="email" placeholder="Ingrese la cuenta de email asociada"     className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black dark:border-gray-500 dark:bg-gray-900 dark:placeholder:text-gray-300 dark:text-white"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email} />
             {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 font-semibold pt-2 dark:text-red-600">{formik.errors.email}</p>
          )}
        </div>
        <input
          type="submit"
          value="Enviar"
          className="bg-sky-700 w-full py-3 text-white rounded uppercase font-bold hover:bg-sky-600 hover:cursor-pointer dark:bg-sky-800 dark:hover:bg-sky-700 transition-colors 300 ease-in mb-5 disabled:bg-sky-950"
        />
         {submit && <AlertComponent message={message} error={error}/>}
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link to={"/"} className='block text-center my-5 text-slate-500 uppercase text-sm font-bold dark:text-gray-300'>¿Ya tienes una cuenta? Inicia sesión</Link>
        <Link to={"/register"} className='block text-center my-5 text-slate-500 uppercase text-sm font-bold dark:text-gray-300'>¿No tienes una cuenta? Regístrate</Link>
      </nav>
    </>
  )
}

export default ForgetPassword
