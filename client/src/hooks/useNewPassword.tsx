/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useFormik } from 'formik';
import { newPasswordScheme } from '../scheme/NewPassword';
import z from 'zod'
import { newPassword } from '../server/auth';

type NewPasswordValues = z.infer<typeof newPasswordScheme>

const useNewPassword = (token:string|undefined) => {
  
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [submit,setSubmit] = useState(false)

  const formik = useFormik<NewPasswordValues>({
    initialValues: {password:'',repeatPassword:''},
    onSubmit:async(values) => {
      try {
        const response = await newPassword(values.password,token)
        setMessage(response.data.message)
        setError(false)
        setSubmit(true)
        // console.log(response.data.message)
      } catch (error:any) {
        setError(true)
        setMessage(error.response?.data.error || 'Error desconocido')
        setSubmit(true)
      }
    },

    validate: (values) => {
      const result = newPasswordScheme.safeParse(values)
      if(result.success) return;
      const errors: Record<string,string> = {}
      result.error.issues.forEach((error) => {
        errors[error.path[0]] = error.message;
      });
      if (values.repeatPassword !== values.password) {
        errors['repeatPassword'] = 'Las contraseñas no coinciden';
      }
      return errors;
    },
    validateOnBlur: true,
  })

  if(submit === true){
    setTimeout(()=>{
      setSubmit(false)
    },2000)
  }

  return { formik, message, error,submit };

};

export default useNewPassword;