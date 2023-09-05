import { User } from "../interfaces/User";
import { ErrorValidate } from "../interfaces/Error";

export const validateUsername = (username:string,errors:ErrorValidate) => {
  const regex = /^[a-zA-ZÀ-ÿ\s]+$/
  if(!username || username.trim() === '') errors.username = 'The username is required'
  if(!regex.test(username.trim())) errors.username = 'The username have invalid characters'
  return errors['username']
};

export const validateEmail = (email:string,errors:ErrorValidate) => {
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  if(!email || email.trim() == '') errors.email = 'The email is required'
  if (!regex.test(email))  errors.email= "Invalid Email"
  return errors['email']
};

export const validatePassword = (password:string,errors:ErrorValidate) => {
  const regex = /^(?=.*[A-Z])(?=.*\d).+/
  if(!password || password.trim() === '') errors.password = 'The password is required'
  if(!regex.test(password)) errors.password = 'The password must contain at least one uppercase letter and at least one number.'
  return errors['password']
};

export const validateRepeatPassword = (repeatPassword:string,errors:ErrorValidate) => {
  const regex = /^(?=.*[A-Z])(?=.*\d).+/
  if(!repeatPassword || repeatPassword.trim() === '') errors.repeatPassword = 'The password is required'
  if(!regex.test(repeatPassword)) errors.repeatPassword = 'The password must contain at least one uppercase letter and at least one number.'
  return errors['repeatPassword']
};



export const validateForm = ({username,email,password}:User) => {
  const errors:ErrorValidate = {
    username:'',
    email:'',
    password:'',
    repeatPassword:''
  }
  username && validateUsername(username,errors);
  email && validateEmail(email,errors);
  password && validatePassword(password,errors);
  return errors
};

export const validateFormRegister = ({username,email,password,repeatPassword}:User) => {
  const errors:ErrorValidate = {
    username:'',
    email:'',
    password:''
  }
  username && validateUsername(username,errors);
  email && validateEmail(email,errors);
  password && validatePassword(password,errors);
  repeatPassword && validateRepeatPassword(repeatPassword,errors);
  if(repeatPassword != password){
    errors.repeatPassword = 'Las contraseñas no coinciden'
  }
  return errors
}