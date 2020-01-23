import React from "react";
import {
  View,
  StyleSheet,
  Linking,
  TouchableWithoutFeedback
} from "react-native";
import styled from "styled-components/native";
import IconValuePair from "../../../components/IconValuePair";
import { FontAwesome } from "@expo/vector-icons";

interface IProps {
  url: string;
  simplifiedUrl: string;
  title: string;
  author: string;
  karma: number;
  score: number;
}

const NewsStory: React.FC<IProps> = ({
  url,
  simplifiedUrl,
  title,
  author,
  karma,
  score
}) => {
  return (
    <SContainer>
      <TouchableWithoutFeedback onPress={() => Linking.openURL(url)}>
        <View>
          <SUrl>{simplifiedUrl}</SUrl>
          <STitle>{title}</STitle>
        </View>
      </TouchableWithoutFeedback>
      <SInfoBar>
        <IconValuePair icon={<FontAwesome name="star" />} value={score} />
        <SAuthor>by: {author}</SAuthor>
        <IconValuePair icon={<FontAwesome name="heart" />} value={karma} />
      </SInfoBar>
    </SContainer>
  );
};
const SContainer = styled.View`
  margin-bottom: 40px;
`;
const STitle = styled.Text`
  ${({ theme }) => `
  font-family: ${theme.fontFamily.primary.medium};
  font-size: ${theme.fontSize.h2};
 `}
  margin-vertical: 4px;
`;
const SUrl = styled.Text`
  ${({ theme }) => `
    font-family: ${theme.fontFamily.secondary.regular};
    font-size: ${theme.fontSize.body2};
  `}
`;

const SInfoBar = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SAuthor = styled.Text`
  ${({ theme }) => `
    font-family: ${theme.fontFamily.secondary.regular};
    font-size: ${theme.fontSize.tiny};
`}
  margin-horizontal: 20px;
`;

export default NewsStory;
