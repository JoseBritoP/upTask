/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist } from 'zustand/middleware';

export type Project = {
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
  setProyects: (projects: Array<Project>) => void;
}

export interface ProjectStore {
  proyects: Array<Project>;
}

export const useProyectStore = create(
  persist<ProjectStore & Actions>((set) => ({
    proyects: [],
    setProyects: (proyects: Array<Project>) => set((state) => ({ ...state, proyects })),
  }), {
    name: 'project',
  })
)
