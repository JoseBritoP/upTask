import z from 'zod'

export const registerScheme = z.object({
  username: z.string({
    required_error: 'El nombre de usuario es obligatorio'
  }).min(5, { message: 'El nombre de usuario debe tener al menos 5 caracteres' }).max(25, { message: 'El nombre de usuario puede tener máximo 25 caracteres' }),
  email: z.string({
    required_error: 'El email es obligatorio'
  }).email({ message: 'Formato de email inválido' }),
  password: z.string({
    required_error: 'La contraseña es obligatoria'
  }).min(5, { message: 'La contraseña debe tener al menos 5 caracteres' }).max(50, { message: 'La contraseña puede tener máximo 50 caracteres' }),
  repeatPassword: z.string({
    required_error: 'La contraseña es obligatoria'
  }).min(5, { message: 'Debe tener al menos 5 caracteres como la contraseña' })
});
