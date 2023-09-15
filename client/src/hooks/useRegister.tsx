/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useFormik } from 'formik';
import { registerScheme } from '../scheme/RegisterScheme';
import z from 'zod';
import { registerRequest } from '../server/auth';
import { useNavigate } from 'react-router-dom';

type RegisterValues = z.infer<typeof registerScheme>;

const useRegister = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [submit,setSubmit] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik<RegisterValues>({
    initialValues: { username: '', email: '', password: '', repeatPassword: '' },
    onSubmit: async (values) => {
      try {
        const response = await registerRequest(values.username, values.email, values.password);

        if (response.status === 201) {
          console.log('Registro messageoso');
          console.log(response.data);
          setMessage(response.data.message + '. Compruebe su correo');
          setError(false)
          setSubmit(true)
          setTimeout(()=>{
            navigate('/login')

          },2500)
        } else {
          console.log('Error en el registro');
          setError(true);
          setSubmit(true)
        }
      } catch (error:any) {
        console.error('Error: ', error);
        setError(true);
        setSubmit(true)
        setMessage(error.response?.data?.error || 'Error desconocido');
      }
    },

    validate: (values) => {
      const result = registerScheme.safeParse(values);
      if (result.success) return;
      const errors: Record<string, string> = {};
      result.error.issues.forEach((error) => {
        errors[error.path[0]] = error.message;
      });
      if (values.repeatPassword !== values.password) {
        errors['repeatPassword'] = 'Las contraseñas no coinciden';
      }
      return errors;
    },
    validateOnBlur: true,
  });

  if(submit === true){
    setTimeout(()=>{
      setSubmit(false)
    },2000)
  }

  return { formik, message, error,submit };
};

export default useRegister;
