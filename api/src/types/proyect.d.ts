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