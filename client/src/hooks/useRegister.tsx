import { useState } from 'react';
import { useFormik } from 'formik';
import { registerScheme } from '../scheme/RegisterScheme';
import z from 'zod';
import { registerRequest } from '../server/auth';
import { useAuthStore } from '../services/auth';

type RegisterValues = z.infer<typeof registerScheme>;

const useRegister = () => {
  const [exit, setExit] = useState(false);
  const [err, setErr] = useState(false);
  const { setToken } = useAuthStore();

  const formik = useFormik<RegisterValues>({
    initialValues: { username: '', email: '', password: '', repeatPassword: '' },
    onSubmit: async (values) => {
      try {
        const response = await registerRequest(values.username, values.email, values.password);

        if (response.status === 201) {
          console.log('Registro exitoso');
          console.log(response.data);
          setToken(response.data.token);
          setExit(true);
          setErr(false);
        } else {
          console.log('Error en el registro');
          setErr(true);
          setExit(false);
        }
      } catch (error) {
        console.error('Error: ', error);
        setErr(true);
        setExit(false);
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

  return { formik, exit, err };
};

export default useRegister;
