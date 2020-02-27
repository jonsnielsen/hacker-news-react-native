import { createContext, useContext } from "react";

interface IToggleThemeContext {
  toggleTheme(): void;
  isLightTheme: boolean;
}
const ToggleThemeContext = createContext<IToggleThemeContext>(null);

const useToggleTheme = () => {
  return useContext(ToggleThemeContext);
};

export { ToggleThemeContext, useToggleTheme };
