import { DefaultTheme, DarkTheme } from "react-native-paper";
import color from "color";

export const lightTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: "#ffffff", primary: "#E3566B" }
};
export const darkTheme = {
  ...DarkTheme,
  colors: { ...DarkTheme.colors, background: "#272727", primary: "#E3566B" }
};

export const contentColor = color(DefaultTheme.colors.text)
  .alpha(0.85)
  .rgb()
  .string();

export const fadedColor = color(DefaultTheme.colors.text)
  .alpha(0.6)
  .rgb()
  .string();
