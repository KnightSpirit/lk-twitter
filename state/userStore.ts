import create from "zustand";

type UserStore = {
  currentUser: string;
  login: (userId: string) => void;
  logOut: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  currentUser: "",
  login: (userId) => {
    set(() => ({ currentUser: userId }));
  },
  logOut: () => {
    set({ currentUser: "" });
  },
}));
