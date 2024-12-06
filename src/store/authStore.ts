import { create } from 'zustand';
import { User } from '../types';

interface AuthStore {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: async (username: string, password: string) => {
    // In a real app, this would make an API call
    if (username && password) {
      set({
        user: {
          id: '1',
          username,
          isAuthenticated: true,
        },
      });
    }
  },
  logout: () => set({ user: null }),
}));