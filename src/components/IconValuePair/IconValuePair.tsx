import React from "react";
import styled from "styled-components/native";

interface IProps {
  icon: any;
  value: any;
}

const IconValuePair: React.FC<IProps> = ({ icon, value }) => {
  return (
    <SWrapper>
      {icon}
      <SValue>{value}</SValue>
    </SWrapper>
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

const SWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`;
const SValue = styled.Text`
  margin-left: 7px;
  ${({ theme }) => `
    font-family: ${theme.fontFamily.secondary.regular} 
    font-size: ${theme.fontSize.tiny}
  `}
`;

export default IconValuePair;
