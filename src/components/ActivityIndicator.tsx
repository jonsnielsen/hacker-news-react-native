import React from "react";
import styled from "styled-components/native";
import { ActivityIndicatorProps } from "react-native";

interface IProps extends ActivityIndicatorProps {}
const ActivityIndicator: React.FC<IProps> = ({ color, ...rest }) => {
  return <SActivityIndicator color={color} {...rest} />;
};

const SActivityIndicator = styled.ActivityIndicator.attrs(props => ({
  color: props.color || props.theme.palette.primary
}))<{ color: string }>``;

export default ActivityIndicator;
