export type UserType = {
  id?: string;
  username: string;
  email: string,
  password: string;
  token?:string,
};

export type UserAuth = {
  id:string,
  username:string,
  email:string
}

export interface UserInterface {
  id: ObjectId;
  username: string;
  email: string,
  password?: string;
  token?:string,
}
export type Identifier = {
  identifier: email | username
}
export type UserLogin = {
  identifier: Identifier
  password: string;
}

export type UserLogged = {
  id:ObjectId
  username:string,
  email:string,
  token:string
}

export type ChangePassword = {
  token:string,
  password:string
}