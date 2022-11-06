import create from "zustand";
import { useTweetsStore } from "./tweetsStore";

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
    useTweetsStore.getState().reset()
    set({ currentUser: "" });
  },
}));
