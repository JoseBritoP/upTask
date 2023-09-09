import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { registerScheme } from '../scheme/RegisterScheme'
import z from 'zod'
import { registerRequest } from '../server/auth'
import { useAuthStore } from '../services/auth'

type Register = z.infer<typeof registerScheme>
const Register = () => {

  const [exit,setExit] = useState(false)
  const [err,setErr] = useState(false)

  const { setToken } = useAuthStore();
  const formik = useFormik({
    initialValues:{username:'',email:'',password:'',repeatPassword:''},
    onSubmit: async (values)=>{
      try {
        const response = await registerRequest(values.username, values.email, values.password);
  
        if (response.status === 201) {
          console.log('Registro exitoso');
          console.log(response.data);
          setToken(response.data.token)
          setExit(true);
          setErr(false);
        } else {
          console.log('Error en el registro');
          setErr(true);
          setExit(false)
        }
      } catch (error) {
        console.error('Error: ', error);
        setErr(true);
        setExit(false)
      }
    },

    validate:(values)=>{
      // console.log(values)

      const result = registerScheme.safeParse(values);
      if(result.success) return;
      const errors:Record<string,string> = {}
      result.error.issues.forEach((error)=>{
        errors[error.path[0]] = error.message
      });
      if(values.repeatPassword !== values.password){
        errors['repeatPassword']='Las contraseñas no coinciden'
      }
      return errors
    },
    validateOnBlur:true
  })

  return (
    <>
      <h1 className="text-sky-600 font-black text-4xl uppercase text-center">Crea tu cuenta {<br></br>} para administrar tus <span className="text-slate-700 dark:text-slate-300">proyectos</span>
      </h1>
      <form action="" className="my-10 bg-white shadow rounded-lg px-10 py-5 border-2 dark:bg-slate-950 dark:border-gray-700 dark:border-2" onSubmit={formik.handleSubmit}>
        {/* Username */}
        <div className="my-5">
        <label htmlFor="username" className="uppercase text-gray-600 block text-xl font-bold dark:text-gray-200 hover:cursor-pointer">Username</label>
          <input
            type="text" name="username" id="username" placeholder="Username"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black dark:border-gray-500 dark:bg-gray-900 dark:placeholder:text-gray-300 dark:text-slate-100"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username && (
            <p className="text-red-500 font-semibold pt-2 dark:text-red-600">{formik.errors.username}</p>
          )}
        </div>
        {/* Email */}
        <div className="my-5">
        <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold dark:text-gray-200 hover:cursor-pointer" >Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black dark:border-gray-500 dark:bg-gray-900 dark:placeholder:text-gray-300 dark:text-slate-100"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 font-semibold pt-2 dark:text-red-600">{formik.errors.email}</p>
          )}
        </div>
        {/* Password */}
        <div className="my-5">
          <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold dark:text-gray-200 hover:cursor-pointer"> Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Ingresa tu contraseña password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black dark:border-gray-500 dark:bg-gray-900 dark:placeholder:text-gray-300 dark:text-slate-100"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
           <p className="text-red-500 font-semibold pt-2 dark:text-red-600">{formik.errors.password}</p>
          )}
        </div>
        {/* RepeatPassword */}
        <div className="my-5">
          <label htmlFor="repeatPassword" className="uppercase text-gray-600 block text-xl font-bold dark:text-gray-200 hover:cursor-pointer"> Repetir Password</label>
          <input
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            placeholder="Confirma tu contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black dark:border-gray-500 dark:bg-gray-900 dark:placeholder:text-gray-300 dark:text-slate-100"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repeatPassword}
          />
          {formik.touched.repeatPassword && formik.errors.repeatPassword && (
            <p className="text-red-500 font-semibold pt-2 dark:text-red-600">{formik.errors.repeatPassword}</p>
            )}
        </div>
        <input
          type="submit"
          value="Registrarme"
          className="bg-sky-700 w-full py-3 text-white rounded uppercase font-bold hover:bg-sky-600 hover:cursor-pointer dark:bg-sky-800 dark:hover:bg-sky-700 transition-colors 300 ease-in mb-5 disabled:bg-sky-950"
        />
        {exit && (
          <p className="text-emerald-500 font-bold text-center dark:text-emerald-600">Formulario enviado con éxito</p>
          )}
        {err && (
          <p className="text-red-500 font-bold text-center dark:text-red-600">Compruebe los datos ingresados</p>
        )}
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link to={"/"} className='block text-center my-5 text-slate-500 uppercase text-sm font-bold dark:text-gray-300'>¿Ya tienes una cuenta? Inicia sesión</Link>
        <Link to={"/forget-password"} className='block text-center my-5 text-slate-500 uppercase text-sm font-bold dark:text-gray-300'>¿Olvidaste tu contraseña?</Link>
      </nav>
    </>
  )
}

export default Register
