/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist } from 'zustand/middleware';

export type Proyect = {
  id?: string;
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
  clearProyects: () => void;
}

export interface ProjectStore {
  proyects: Array<Proyect>;
}

export const useProyectStore = create(
  persist<ProjectStore & Actions>((set) => ({
    proyects: [],
    setProyects: (proyects: Array<Proyect>) => set((state) => ({ ...state, proyects })),
    clearProyects: () => set((state)=>({...state,proyects:[]}))
  }), {
    name: 'project',
  })
)
