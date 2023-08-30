import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'

const Register = () => {
  const [exit,setExit] = useState(false)

  return (
    <>
      <h1 className="text-sky-600 font-black text-4xl uppercase text-center">Crea tu cuenta {<br></br>} para administrar tus <span className="text-slate-700">proyectos</span>
      </h1>
      <Formik 
        initialValues={{
          username: '',
          email:'',
          password:'',
          repeatPassword:''
        }}
        validate={(values)=>{
          const errors = {
            username: '',
            email: '',
            password: '',
            repeatPassword:''
          }
          if(!values.username){
            console.log('Por favor escribe un nombre')
            errors.username = 'Por favor ingrese un apodo'
          } else if(!/^[a-zA-ZÀ-ÿ\s]{5,20}$/.test(values.username)){
            errors.username='Su apodo solo puede contener letras y tener más de 3 caracteres'
          }
          if(!values.email){
            console.log('Por favor ingrese su correo')
            errors.email = 'Por favor ingrese su correo'
          } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
            errors.email= "El formato del correo no es correcto"
          }
          if(!values.password){
            console.log("Porfavor ingresa una contraseña")
            errors.password= "Porfavor ingresa una contraseña"
          }
          if(!values.repeatPassword){
            console.log("Porfavor repita su contraseña")
            errors.repeatPassword="Porfavor repita su contraseña"
          }
          if(values.repeatPassword !== values.password){
            console.log('Las contraseñas no coinciden')
            errors.repeatPassword='Las contraseñas no coinciden'
          }
          return errors
        }}
        onSubmit={(values,{resetForm})=>{
          console.log(values)
          setExit(true)
          resetForm();
          console.log('Enviando formulario...')
        }}
      >
        {({values,handleSubmit,handleChange,handleBlur,errors,touched})=>(
          <form action="" onSubmit={handleSubmit} className="my-10 bg-white shadow rounded-lg px-10 py-5">
            {/* Username */}
            <div className="my-5">
              <label htmlFor="username" className="uppercase text-gray-600 block text-xl font-bold hover:cursor-pointer">Username</label>
              <input 
                type="text" name="username" id="username" 
                value={values.username}
                placeholder="Username" className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black" 
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.username && errors.username && <p className='text-red-500 font-semibold'>{errors.username}</p>}
            </div>
            {/* Email */}
            <div className="my-5">
              <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold hover:cursor-pointer">Email</label>
              <input 
                type="email" name="email" id="email" placeholder="Email de registro"
                value={values.email}
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black" 
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && <p className='text-red-500 font-semibold'>{errors.email}</p>}
            </div>
            {/* Password */}
            <div className="my-5">
              <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold hover:cursor-pointer">Password</label>
              <input 
                type="password" name="password" id="password" placeholder="Ingresa tu contraseña password" 
                value={values.password}
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black" 
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && <p className='text-red-500 font-semibold'>{errors.password}</p>}
            </div>
            {/* Repeat Password */}
            <div className="my-5">
              <label htmlFor="repeatPassword" className="uppercase text-gray-600 block text-xl font-bold hover:cursor-pointer">Repetir password</label>
              <input 
                type="password" name="repeatPassword" id="repeatPassword" placeholder="Repite tu contraseña" 
                value={values.repeatPassword}
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black" 
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.repeatPassword && errors.repeatPassword && <p className='text-red-500 font-semibold'>{errors.repeatPassword}</p>}
            </div>
            <input type="submit" value="Iniciar sesión" className="bg-sky-700 w-full py-3 text-white rounded uppercase font-bold hover:bg-sky-600 hover:cursor-pointer transition-colors 300 ease-in mb-5" />
            {exit && <p className='text-emerald-500 font-semibold'>Formulario enviado con éxito</p>}
          </form>
        )}
      </Formik>
      <nav className="lg:flex lg:justify-between">
        <Link to={"/"} className='block text-center my-5 text-slate-500 uppercase text-sm font-bold'>¿Ya tienes una cuenta? Inicia sesión</Link>
        <Link to={"/forget-password"} className='block text-center my-5 text-slate-500 uppercase text-sm font-bold'>¿Olvidaste tu contraseña?</Link>
      </nav>
    </>
  )
}

export default Register
