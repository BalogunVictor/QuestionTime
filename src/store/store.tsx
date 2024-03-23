import { create } from 'zustand';

type AuthState = {
  auth: {
    active: boolean;
    token: string;
  };
  setToken: (payload: string) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  auth: {
    active: false,
    token: '',
  },
  setToken: (payload: string) =>
    set((state) => ({ auth: { ...state.auth, token: payload } })),
}));
