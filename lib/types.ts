export type Theme = "dark" | "light";

export interface ThemeContextInterface {
  theme: Theme;
  setTheme: (str: Theme) => void;
}

export interface HeaderControls {
  openCart: () => void;
  openSearch: () => void;
  openMenu: () => void;
}
