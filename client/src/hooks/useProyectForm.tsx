/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { useFormik } from 'formik';
import z from 'zod'
import { proyectSheme } from '../scheme/ProyectScheme';
import { createProyect,
  //  getProyects 
  } from '../server/proyect';
// import { useProyectStore } from '../services/proyect';
import { useNavigate } from 'react-router-dom';

type ProyectValues = z.infer<typeof proyectSheme>
const useProyectForm = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [submit,setSubmit] = useState(false);
  // const { setProyects } = useProyectStore();

  const formik = useFormik<ProyectValues>({
    initialValues:{name:'',description:'',limitdate:'',client:''},
    onSubmit: async (values) => {
      try {
        const response = await createProyect(values.name,values.description,values.client);
        console.log('Proyecto creado');
        console.log(response.data);
        setMessage('Proyecto creado');
        setError(false);
        // const proyect = await getProyects();
        // setProyects(proyect.data);
        setSubmit(true);
        setTimeout(()=>{
          navigate('/proyects')
        },850)
      } catch (error:any) {
        console.log('Error: ', error);
        setMessage(error.response.data.error);
        setError(true)
        setSubmit(true)
      }
    },

    validate:(values) =>{
      const result = proyectSheme.safeParse(values);
      if(result.success) return;
      const errors: Record<string, string> = {};
      result.error.issues.forEach((error) => {
        errors[error.path[0]] = error.message;
      });
      return errors
    }
  })

  return { formik, message, error,submit}
};

export default useProyectForm