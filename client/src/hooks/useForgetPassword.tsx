/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useFormik } from 'formik';
import { forgetPasswordScheme } from '../scheme/forget-password';
import z from 'zod'
import { confirmEmailToChangePassword } from '../server/auth';

type ForgetPasswordValues = z.infer<typeof forgetPasswordScheme>

const useForgetPassword = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [submit,setSubmit] = useState(false);

  const formik = useFormik<ForgetPasswordValues>({
    initialValues:{email:''},
    onSubmit:async(values) => {
      try {
        const response = await confirmEmailToChangePassword(values.email);
        // setMessage(response.data.message)
        setMessage(response.data.message)
        // console.log(response)
        setError(false)
        setSubmit(true)
        
      } catch (error:any) {
        // console.log(error.response.data)
        setError(true);
        setSubmit(true)
        setMessage(error.response.data.error)
      }
    },

    validate:(values)=>{
      const result = forgetPasswordScheme.safeParse(values)
      if (result.success) return;
      const errors: Record<string, string> = {};
      result.error.issues.forEach((error) => {
        errors[error.path[0]] = error.message;
      });
      return errors
    },
    validateOnBlur:true
  })
  return { formik, message, error,submit };
}

export default useForgetPassword