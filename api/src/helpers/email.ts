import nodemailer from 'nodemailer'
interface User {
  username:string
  email:string
  token:string | undefined
}
export const emailRegister = ({username,email,token}:User) => {
  console.log(`DATOS: ${username} ${email} ${token}`)
}