import { Action } from "../../types/Action"

const initialState = {
  users:[],
  usersFilter:[],
  user:{},
  proyects:[],
  proyectsFilter:[],
  tasks:[],
  tasksFilter:[]
}

export const rootReducer = (state=initialState,action:Action) => {
  switch(action.type){
    default: return {...state}
  }
}