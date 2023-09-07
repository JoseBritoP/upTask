import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import z from 'zod'
import { loginScheme } from '../scheme/LoginScheme'

type Login = z.infer<typeof loginScheme>

const Login = () => {

  const [message,setMessage] = useState(false)
  
  const formik = useFormik({
    initialValues:{username:'',email:'',password:''},
    onSubmit:(values)=>{
      console.log(values)
      setMessage(true)
    },

    validate:(values)=>{
      
      const result = loginScheme.safeParse(values);
      if(result.success) return;
      const errors:Record<string,string> = {}
      result.error.issues.forEach((error)=>{
        errors[error.path[0]] = error.message
      });
      return errors
    },
    validateOnBlur:true
  })
  return (
    <>
      <h1 className="text-sky-600 font-black text-4xl uppercase text-center">Inicia sesión {<br></br>} administra tus <span className="text-slate-700">proyectos</span>
      </h1>
      <form
        action=""
        className="my-10 bg-white shadow rounded-lg px-10 py-5"
        onSubmit={formik.handleSubmit}
      >
        {/* Username */}
        <div className="my-5">
          <label
            htmlFor="username"
            className="uppercase text-gray-600 block text-xl font-bold hover:cursor-pointer"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username && (
            <p className="text-red-500 font-semibold">
              {formik.errors.username}
            </p>
          )}
        </div>
        {/* Email */}
        <div className="my-5">
          <label
            htmlFor="email"
            className="uppercase text-gray-600 block text-xl font-bold hover:cursor-pointer"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 font-semibold">{formik.errors.email}</p>
          )}
        </div>
        {/* Password */}
        <div className="my-5">
          <label
            htmlFor="password"
            className="uppercase text-gray-600 block text-xl font-bold hover:cursor-pointer"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Ingresa tu contraseña password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 font-semibold">{formik.errors.password}</p>
          )}
        </div>
        <input
          type="submit"
          value="Iniciar sesión"
          className="bg-sky-700 w-full py-3 text-white rounded uppercase font-bold hover:bg-sky-600 hover:cursor-pointer transition-colors 300 ease-in mb-5 disabled:bg-sky-950"
        />
        {message && (
          <p className="text-emerald-500 font-bold text-center">Formulario enviado con éxito</p>
        )}
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link to={"/register"} className='block text-center my-5 text-slate-500 uppercase text-sm font-bold'>¿No tienes una cuenta? Regístrate</Link>
        <Link to={"/forget-password"} className='block text-center my-5 text-slate-500 uppercase text-sm font-bold'>¿Olvidaste tu contraseña?</Link>
      </nav>
    </>
  )
}

export default Login
