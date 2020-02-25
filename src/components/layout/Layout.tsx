import React from "react";
import { View } from "react-native";

interface IProps {
  children: any;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <View></View>
    // <SLkoayout>
    //   <SContentWrapper>{children}</SContentWrapper>
    // </SLkoayout>
  );
};

// const SLayout = styled.View`
//   flex: 1;
//   ${({ theme }) => `
//     background-color: ${theme.palette.background};
//   `}
// `;
// const SContentWrapper = styled.View`
//   width: 90%;
//   margin: 0 auto;
// `;

export default Layout;
