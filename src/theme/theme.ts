// import { DefaultTheme, ThemeContext } from "styled-components";
import baseStyled, { ThemedStyledInterface } from "styled-components";

export const defaultTheme = {
  palette: {
    primary: "#E3566B",
    background: "#fff",
    backgroundAccent: "#F8F7F9"
  },
  font: {
    primary: {
      regular: "roboto",
      medium: "roboto-medium",
      bold: "roboto-bold"
    },
    secondary: {
      regular: "roboto-mono"
    }
  }
};

export const darkTheme: typeof defaultTheme = {
  ...defaultTheme,
  palette: {
    primary: "#E3566B",
    background: "#26262B",
    backgroundAccent: "#1C1C20"
  }
};

export type Theme = typeof defaultTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
