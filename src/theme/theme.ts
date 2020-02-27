import { DefaultTheme, DarkTheme } from "react-native-paper";

export const lightTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: "#ffffff", primary: "#E3566B" }
};
export const darkTheme = {
  ...DarkTheme,
  colors: { ...DarkTheme.colors, background: "#272727", primary: "#E3566B" }
};
