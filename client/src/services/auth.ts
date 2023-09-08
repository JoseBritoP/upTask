/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';

type Actions = {
  setToken: (token: string) => void;
};

export interface UserStore {
  users: User[];
  token: string;
}

export const useAuthStore = create(
  persist<UserStore & Actions>((set) => ({
    users: [],
    token: '',

    setToken: (token: string) => set((state) => ({
        token,
      })),
  }), {
    name: 'auth',
  })
)
