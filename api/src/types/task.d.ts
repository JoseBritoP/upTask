const enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high'
}

export type TaskType = {
  id?:string,
  name:string,
  description:string,
  limitDate?:string,
  priority: Priority,
  proyect:any,
  creatorId:any
}

export type TaskEdit = {
  id:string,
  creatorId:any,
  name: string;
  description : string ;
  state:boolean,
  limitDate:date,
  priority: Priority,
  completed:boolean
}