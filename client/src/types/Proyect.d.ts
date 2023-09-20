import { User } from './User'
import { Task } from './Task'
export type Proyect = {
  _id?:string
  name:string
  description:string
  limitDate?:string
  client:string
  collaborators?:string | User[]
  tasks?: string | Task[]
  creator?:string
}