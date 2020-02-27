import React from "react";
import { StyleSheet, View } from "react-native";
import { Caption } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useCustomTheme } from "../../theme";

interface IProps {
  icon?: string | unknown;
  caption?: string | unknown;
}

const IconValuePair: React.FC<IProps> = ({ icon, caption }) => {
  const { contentColor, fadedColor } = useCustomTheme();
  if (typeof caption === "number") {
    caption = caption.toString();
  }
  return (
    <View style={styles.wrapper}>
      {!icon ? null : typeof icon === "string" ? (
        <MaterialCommunityIcons size={18} name={icon} color={fadedColor} />
      ) : (
        icon
      )}
      {!caption ? null : typeof caption === "string" ? (
        <Caption style={styles.caption}>{caption}</Caption>
      ) : (
        caption
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    // alignSelf: "flex-start",
    marginRight: 15
  },
  caption: {
    marginLeft: 2,
    lineHeight: 12
  }
});

export default IconValuePair;
