const enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high'
}

export type Task = {
  id:string
  name:string
  description:string
  state:boolean
  limitDate:string
  priority: Priority
  proyect:string
}