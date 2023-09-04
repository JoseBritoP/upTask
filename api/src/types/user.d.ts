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

export type Task = {
  _id: ObjectId;
  name: string;
  description: string;
  state: boolean;
  limitDate: string;
  priority: string;
  completed: boolean;
};

export type Project = {
  _id: ObjectId;
  name: string;
  description: string;
  limitDate: string;
  client: string;
  collaborators: any[]; // Puedes definir un tipo adecuado aquí si es necesario
  tasks: Task[];
};

export type User = {
  _id: ObjectId;
  username: string;
  email: string;
  proyects: Project[];
};

export type AllUsers = User[]