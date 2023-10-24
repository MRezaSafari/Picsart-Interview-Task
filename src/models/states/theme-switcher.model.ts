type THEMES = "dark" | "light";

export interface IThemeSwitcher {
  theme: THEMES;
  switch: (theme: THEMES) => void;
}
