import z from 'zod';
import { TaskType} from '../types/task';

const taskScheme = z.object({
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
  priority:
    z.array(
      z.enum(['low','medium','high'],{
      required_error: 'Task priority is required',
      invalid_type_error: 'Task priority must be an array of enum Priority',
      })
    ),
});

export const validateTask = (object:TaskType) =>{
  return taskScheme.safeParseAsync(object)
}

export const validatePartialTask = (object:TaskType) =>{
  return taskScheme.partial().safeParseAsync(object)
}