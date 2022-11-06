import create from "zustand";

type ThemeMode = "normal" | "dark";
type ThemeStore = {
  theme: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "normal",
  setMode: (mode: ThemeMode) => {
    set({ theme: mode });
  },
}));
