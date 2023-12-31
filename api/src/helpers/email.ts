import nodemailer from 'nodemailer'
interface User {
  username:string
  email:string
  token?:string | undefined
}
export const emailRegister = async ({username,email,token}:User) => {
  console.log(`DATOS: ${username} ${email} ${token}`)
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: `${process.env.USER_NODEMAILER}`,
      pass: `${process.env.PASS_NODEMAILER}`
    }
  });

  // Información

  const info = await transport.sendMail({
    from:'"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: 'UpTask - Confirma tu cuenta',
    text: 'Compruebe su cuenta en UpTask',
    html:`
      <p>Hola ${username} compruebe su cuenta en UpTask </p>
      <p>Tu cuenta está casi lista, solo debe comprobarla en el siguiente enlace:
        <a href="${process.env.FRONTEND}confirm-account/${token}">Comprobar cuenta</a>
      </p>
      <p>Si no creaste esta cuenta, puede ignorar este mensaje</p>
    `
  })
}

export const emailChangePassword = async({username,email,token}:User) => {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: `${process.env.USER_NODEMAILER}`,
      pass: `${process.env.PASS_NODEMAILER}`
    }
  });
  const info = await transport.sendMail({
    from:'"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: 'UpTask - Reestablece tu password',
    text: 'Reestablece tu password',
    html:`
      <p>Hola ${username} has solicitado reestablecer tu contraseña </p>
      <p>En este enlace podrá crear su nueva contraseña de acceso:
        <a href="${process.env.FRONTEND}forget-password/${token}">Restablecer contraseña</a>
      </p>
      <p>Si no solicitaste este email, puede ignorar este mensaje</p>
    `
  })

};