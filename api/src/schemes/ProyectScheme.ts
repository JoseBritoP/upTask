import z from 'zod';
import { ProyectType } from '../types/proyect';

const proyectSheme = z.object({
  name:
    z.string({
      required_error:'Name is a required field',
      invalid_type_error:'The name must be a string'
    }).regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,{
      message: 'Invalid characters in the name',
    }),
  description: 
    z.string({
      required_error:"Description is a required field",
      invalid_type_error:'The description must be a string'
    })
    .min(5,{message:'The description must have almost 5 words'})
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,{
      message: 'Invalid characters in the description',
    }),
  client: 
    z.string({
      required_error:"Client's Name is a required Field",
      invalid_type_error:"The client's name must be a string"
    })
    .max(30, {message : "The Client's name can't exceed more than thirty letters"})
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,{message: "Invalid characters in the client's name"}),
})

export const validateProyect = (object:ProyectType) => {
  return proyectSheme.safeParseAsync(object)
};
export const validatePartialProyect = (object:ProyectType) => {
  return proyectSheme.partial().safeParseAsync(object)
};