import React from "react";
import { useTheme } from "react-native-paper";
import color from "color";

const useCustomTheme = () => {
  const theme = useTheme();
  const contentColor = color(theme.colors.text)
    .alpha(0.85)
    .rgb()
    .string();

  const fadedColor = color(theme.colors.text)
    .alpha(0.6)
    .rgb()
    .string();
  return { contentColor, fadedColor };
};

export default useCustomTheme;
