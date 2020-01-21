import React from "react";
import styled from "styled-components";
import { View, StyleSheet, Text } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { useSelector } from "react-redux";
import { AppState } from "../store";

interface IProps extends NavigationInjectedProps {}

const HomeScreen: React.FC<IProps> = ({ navigation }) => {
  const topTenNews = useSelector((state: AppState) => state.hackerNews.posts);
  return (
    <Container>
      <Title>Yo</Title>
    </Container>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  }
});

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 24;
`;

export default HomeScreen;
