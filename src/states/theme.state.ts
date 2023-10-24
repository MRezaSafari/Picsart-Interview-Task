import { IThemeSwitcher } from "src/models";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useThemeStore = create<IThemeSwitcher>()(
  devtools(
    persist(
      (set) => ({
        theme: "light",
        switch: (theme) => set(() => ({ theme: theme })),
      }),
      {
        name: "theme-storage",
      }
    )
  )
);

export default useThemeStore;
