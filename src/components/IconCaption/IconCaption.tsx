import React from "react";
import { StyleSheet, View } from "react-native";
import { Caption } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { fadedColor } from "../../theme/theme";

interface IProps {
  icon?: string | unknown;
  caption?: string | unknown;
}

const IconValuePair: React.FC<IProps> = ({ icon, caption }) => {
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

{
  /* <View style={styles.section}>
<Paragraph style={[styles.paragraph, styles.caption]}>
  202
</Paragraph>
<Caption style={styles.caption}>Following</Caption>
</View> */
}
// section: {
//   flexDirection: "row",
//   alignItems: "center",
//   marginRight: 15
// },
// paragraph: {
//   fontWeight: "bold",
//   marginRight: 3
// },
// caption: {
//   fontSize: 14,
//   lineHeight: 14
// },

// const SWrapper = styled.View``;
// const SValue = styled.Text`
//   margin-left: 7px;
//   ${({ theme }) => `
//     font-family: ${theme.fontFamily.secondary.regular}
//     font-size: ${theme.fontSize.tiny}
//   `}
// `;

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
