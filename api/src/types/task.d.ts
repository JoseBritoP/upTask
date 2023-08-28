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
  priority: Priority
}