import React from "react";
import styled from "styled-components/native";

interface IProps {
  children: any;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <SLayout>
      <SContentWrapper>{children}</SContentWrapper>
    </SLayout>
  );
};

const SLayout = styled.View`
  flex: 1;
  ${({ theme }) => `
    background-color: ${theme.palette.background};
  `}
`;
const SContentWrapper = styled.View`
  width: 90%;
  margin: 0 auto;
`;

export default Layout;
