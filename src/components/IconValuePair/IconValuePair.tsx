import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

interface IProps {
  icon: any;
  value: any;
}

const IconValuePair: React.FC<IProps> = ({ icon, value }) => {
  return (
    <View style={styles.wrapper}>
      {icon}
      <Text>{value}</Text>
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
    alignSelf: "flex-start"
  }
});

export default IconValuePair;
