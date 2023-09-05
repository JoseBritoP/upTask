import { Formik,Form,Field,ErrorMessage } from 'formik'
import { validateFormNewPassword } from '../helpers/validate'
const NewPassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-4xl uppercase text-center">Restablece tu <span className="text-slate-700">contraseña</span></h1>
      <Formik
        initialValues={{
          password: '',
          repeatPassword:'',
        }}
        validate={validateFormNewPassword}
        onSubmit={(values,{resetForm})=>{
          console.log(values);
          console.log('Enviando formulario...')
          resetForm()
        }}
      >
        {({errors})=>(
          <Form className="my-10 bg-white shadow rounded-lg px-10 py-5">
            {/* Password */}
            <div className="my-5">
              <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold hover:cursor-pointer">New Password</label>

              <Field type="password" name="password" id="password" placeholder="Ingresa tu nueva contraseña" className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black" />

              <ErrorMessage name='password' component={() => (
                <p className='text-red-500 font-semibold'>{errors.password}</p>
              )}/>

            </div>
            {/* Repeat Password */}
            <div className="my-5">
              <label htmlFor="repeatPassword" className="uppercase text-gray-600 block text-xl font-bold hover:cursor-pointer">Repeat Password</label>

              <Field 
                type="password" name="repeatPassword" id="repeatPassword" placeholder="Confirma tu contraseña" 
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black" 
              />

              <ErrorMessage name="repeatPassword" component = {()=>(
                <p className='text-red-500 font-semibold'>{errors.repeatPassword}</p>
              )}/>

            </div>
          </Form>
        )}
      </Formik>
  </>
  )
}

export default NewPassword