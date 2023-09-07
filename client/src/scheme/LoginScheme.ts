import z from 'zod'

export const loginScheme = z.object({
  username:z.string().min(5,{message:'El nombre de usuario debe tener al menos 5 caracteres'}).max(25,{message:'El nombre de usuario puede tener máximo 25 caracteres'}).optional().nullable(),
  email: z.string().email({message:'Formato de email invalido'}).optional().nullable(),
  password: z.string({
    required_error:'La contraseña es obligatoria'
  }).min(5,{message:'La contraseña debe tener al menos 5 caracteres'}).max(50,{message:'La contraseña puede tener máximo 50 caracteres'})
});
