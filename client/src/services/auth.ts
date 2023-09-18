/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';

export type Profile = {
  id: string;
  username?:string;
  email?:string;
  token?:string;
  userType:string
}

type Actions = {
  setToken: (token: string) => void;
  clearProfile: () => void;
  setProfile: (profile:any) => void;
};

export interface UserStore {
  users: User[];
  token: string;
  profile:Profile,
  load:boolean
}

export const useAuthStore = create(
  persist<UserStore & Actions>((set) => ({
    users: [],
    token: '',
    profile:{
      id:'',
      username:'',
      email:'',
      userType:"",
      token:''
    },
    load:false,

    setToken: (token: string) => set((state) => ({...state,token,})),
    clearProfile: () => set((state)=>({...state,token:'',profile:{
      id:'',
      username:'',
      email:'',
      userType:"",
      token:''
    }})),
    setProfile:(profile:any)=> set((state)=>({
      ...state,profile
    }))
  }), {
    name: 'auth',
  })
)
