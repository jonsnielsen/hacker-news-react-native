import { DefaultTheme, DarkTheme } from "react-native-paper";

export const lightTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: "#ffffff", primary: "#1ba1f2" }
};
export const darkTheme = {
  ...DarkTheme,
  colors: { ...DarkTheme.colors, background: "#272727", primary: "#1ba1f2" }
};
