export type UserRef = {
  type:string,
  ref:string
}

export type ProyectType = {
  id?:string,
  name:string,
  description:string,
  limitDate?: string,
  client:string,
  creator?:UserRef,
  collaborators: UserRef[]
}

export type NewProyect = {
  name: string,
  description: string,
  client: string,
  creatorId:string
}

export type UpdateProyect = {
  name?: string,
  description?: string,
  limitDate?:date,
  collaborators?: UserRef[]
  client?: string,
}