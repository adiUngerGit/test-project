import { create } from 'zustand';

interface UserState {
    isLoggedIn: boolean;
    user: {
        id: string;
        username: string;
        email: string;
        password: string;
    };
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    setUser: (user: UserState['user']) => void;
}

export const useUser = create<UserState>((set) => ({
    isLoggedIn: false,
    user: {
        id: '',
        username: '',
        email: '',
        password: '',
    },
    setUser: (user: UserState['user']) => set({ user }),
    setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
}));
