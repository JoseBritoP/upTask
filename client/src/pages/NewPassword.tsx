import { useState } from 'react'
import { useFormik } from 'formik'
import z from 'zod'
// import { validateFormNewPassword } from '../helpers/validate'
import { newPasswordScheme } from '../scheme/NewPassword'

type NewPassword = z.infer<typeof newPasswordScheme>
const NewPassword = () => {
  const [message,setMessage] = useState(false)
  const formik = useFormik({
    initialValues:{password:'',repeatPassword:''},
    onSubmit:(values)=>{
      console.log(values)
      setMessage(true)
    },

    validate:(values)=>{
      
      const result = newPasswordScheme.safeParse(values);
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
      <h1 className="text-sky-600 font-black text-4xl uppercase text-center">Restablece tu <span className="text-slate-700 dark:text-slate-300">contraseña</span></h1>
    <form className="my-10 bg-white shadow rounded-lg px-10 py-5 border-2 dark:bg-slate-950 dark:border-gray-700 dark:border-2">
      {/* Password */}
      <div className="my-5">
        <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold dark:text-gray-200 hover:cursor-pointer">Nueva Password</label>

        <input type="password" name="password" id="password" placeholder="Ingresa tu nueva contraseña"             className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black dark:border-gray-500 dark:bg-gray-900 dark:placeholder:text-gray-300"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 font-semibold pt-2 dark:text-red-600">
            {formik.errors.password}
          </p>
        )}
      </div>
      {/* Repeat Password */}
      <div className="my-5">
        <label htmlFor="repeatPassword" className="uppercase text-gray-600 block text-xl font-bold dark:text-gray-200 hover:cursor-pointer">Confirmar Password</label>

        <input 
          type="repeatPassword" name="repeatPassword" id="repeatPassword" placeholder="Confirma tu contraseña" 
          className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black dark:border-gray-500 dark:bg-gray-900 dark:placeholder:text-gray-300"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repeatPassword}
        />
        {formik.touched.repeatPassword && formik.errors.repeatPassword && (
          <p className="text-red-500 font-semibold pt-2 dark:text-red-600">
            {formik.errors.repeatPassword}
          </p>
        )}
      </div>
      <input
        type="submit"
        value="Cambiar Contraseña"
        className="bg-sky-700 w-full py-3 text-white rounded uppercase font-bold hover:bg-sky-600 hover:cursor-pointer dark:bg-sky-800 dark:hover:bg-sky-700 transition-colors 300 ease-in mb-5 disabled:bg-sky-950"
      />
      {message && (
        <p className="text-emerald-500 font-bold text-center">Formulario enviado con éxito</p>
      )}
    </form>
  </>
  )
}

export default NewPassword