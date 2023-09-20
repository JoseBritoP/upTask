/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist } from 'zustand/middleware';

export type Proyect = {
  _id?: string;
  name: string;
  description: string;
  client: string;
  limitDate?: string;
  collaborators?: any;
  tasks: any;
  creator?: string;
}

type Actions = {
  setProyects: (proyects: Array<Proyect>) => void;
  setDetail:(proyect:Proyect) =>void;
  clearDetail:() =>void;
  clearProyects: () => void;
}

export interface ProyectStore {
  proyects: Array<Proyect>;
  proyectDetail:Proyect
}

export const useProyectStore = create(
  persist<ProyectStore & Actions>((set) => ({
    proyects: [],
    proyectDetail:{} as Proyect,
    setProyects: (proyects: Array<Proyect>) => set((state) => ({ ...state, proyects })),
    setDetail:(proyect:Proyect) =>set ((state)=>({...state,proyectDetail:proyect})),
    clearProyects: () => set((state)=>({...state,proyects:[]})),
    clearDetail: () => set((state)=>({...state,proyectDetail:{} as Proyect}))
  }), {
    name: 'proyect',
  })
)
