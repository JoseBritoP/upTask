export interface User {
  username:string
  email:string
  password:string
  repeatPassword?:string
}

export interface NewPassword {
  password:string
  repeatPassword:string
}