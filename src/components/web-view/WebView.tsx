import React from "react";
import { View, StyleSheet } from "react-native";
import HTMLView from "react-native-htmlview";
import { useTheme } from "react-native-paper";
import { useCustomTheme } from "../../theme";

interface IProps {
  html: string;
  style?: any;
}

const WebView: React.FC<IProps> = ({ html, style }) => {
  const { contentColor, fadedColor } = useCustomTheme();
  const theme = useTheme();

  const htmlView = `<div>${html}</div>`;

  const htmlViewStyles = {
    p: { color: contentColor },
    div: { color: contentColor },
    span: { color: contentColor },
    "*": { color: contentColor },
    a: { color: theme.colors.primary }
  };

  return (
    <HTMLView style={style} value={htmlView} stylesheet={htmlViewStyles} />
  );
};

const styles = StyleSheet.create({});

export default WebView;
