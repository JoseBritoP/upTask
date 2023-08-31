import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik,Form,Field,ErrorMessage } from 'formik'
const Login = () => {

  const [message,setMessage] = useState(false)
  return (
    <>
      <h1 className="text-sky-600 font-black text-4xl uppercase text-center">Inicia sesión {<br></br>} administra tus <span className="text-slate-700">proyectos</span>
      </h1>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password:''
        }}

        validate={({username,email,password})=>{
          const errors = {
            username: '',
            email: '',
            password:''
          }
          if(!username || !email){
            errors.username = 'Username or email are required for login'
            errors.email = 'Username or email are required for login'
          } else if(username || email){
            if(username && !/^[a-zA-ZÀ-ÿ\s]{5,20}$/.test(username)){
              errors.username = 'The username only have characters'
            }
            if(email && !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)){
              errors.email= "Invalid Email"
            }
          }
          if(!password){
            errors.password = 'The password is required'
          }
          return errors;
        }}

        onSubmit={(values,{resetForm})=>{
          console.log(values)
          console.log('Enviando formulario...')
          setMessage(true)
          resetForm();
        }}
      >
        {({errors})=>(
          <Form action="" className="my-10 bg-white shadow rounded-lg px-10 py-5">
            {/* Username */}
            <div className="my-5">
              <label htmlFor="username" className="uppercase text-gray-600 block text-xl font-bold hover:cursor-pointer">Username</label>
              <Field 
                type="text" name="username" id="username" 
                placeholder="Username" className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black" 
              />
              <ErrorMessage name="username" component = {()=>(
                <p className='text-red-500 font-semibold'>{errors.username}</p>
              )}/>
            </div>
            {/* Email */}
            <div className="my-5">
              <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold hover:cursor-pointer">Email</label>
              <Field 
                type="email" name="email" id="email" placeholder="Email de registro"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black" 
              />
                <ErrorMessage name="email" component = {()=>(
                <p className='text-red-500 font-semibold'>{errors.email}</p>
              )}/>
            </div>
            {/* Password */}
            <div className="my-5">
              <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold hover:cursor-pointer">Password</label>
              <Field 
                type="password" name="password" id="password" placeholder="Ingresa tu contraseña password" 
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black" 
              />
              <ErrorMessage name="password" component = {()=>(
                <p className='text-red-500 font-semibold'>{errors.password}</p>
              )}/>
            </div>
            <input type="submit" value="Iniciar sesión" className="bg-sky-700 w-full py-3 text-white rounded uppercase font-bold hover:bg-sky-600 hover:cursor-pointer transition-colors 300 ease-in mb-5" />
            {message && <p className='text-emerald-500 font-semibold'>Formulario enviado con éxito</p>}
          </Form>
        )}
      </Formik>
      <nav className="lg:flex lg:justify-between">
        <Link to={"/register"} className='block text-center my-5 text-slate-500 uppercase text-sm font-bold'>¿No tienes una cuenta? Regístrate</Link>
        <Link to={"/forget-password"} className='block text-center my-5 text-slate-500 uppercase text-sm font-bold'>¿Olvidaste tu contraseña?</Link>
      </nav>
    </>
  )
}

export default Login
