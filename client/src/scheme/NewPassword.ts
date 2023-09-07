import z from 'zod'

export const newPasswordScheme = z.object({
  password: z.string({
    required_error: 'La nueva contraseña es obligatoria'
  }).min(5, { message: 'La nueva contraseña debe tener al menos 5 caracteres' }).max(50, { message: 'La nueva contraseña puede tener máximo 50 caracteres' }),
  repeatPassword: z.string({
    required_error: 'La contraseña es obligatoria'
  }).min(5, { message: 'Debe tener al menos 5 caracteres como la contraseña' })
})