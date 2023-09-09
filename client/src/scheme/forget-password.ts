import z from 'zod'

export const forgetPasswordScheme = z.object({
  email: z.string({
    required_error: 'El correo es necesario para reestablecer la contraseña'
  }).email({message:'Formato de email invalido'})
})