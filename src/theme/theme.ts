import "styled-components/native";
import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: string;
      background: string;
      backgroundAccent: string;
    };
    fontFamily: {
      primary: {
        regular: string;
        medium: string;
        bold: string;
      };
      secondary: {
        regular: string;
      };
    };
    fontSize: {
      tiny: string;
      body2: string;
      body1: string;
      h2: string;
      h1: string;
    };
  }
}

export const lightTheme: DefaultTheme = {
  palette: {
    primary: "#E3566B",
    background: "#fff",
    backgroundAccent: "#F8F7F9"
  },
  fontFamily: {
    primary: {
      regular: "roboto",
      medium: "roboto-medium",
      bold: "roboto-bold"
    },
    secondary: {
      regular: "roboto-mono"
    }
  },
  fontSize: {
    tiny: "13px",
    body2: "14px",
    body1: "19px",
    h2: "19px",
    h1: "38px"
  }
};

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  palette: {
    primary: "#E3566B",
    background: "#31313D",
    backgroundAccent: "#1C1C20"
  }
};
