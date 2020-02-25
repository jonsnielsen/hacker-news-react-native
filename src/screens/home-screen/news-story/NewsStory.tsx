import React from "react";
import {
  View,
  StyleSheet,
  Linking,
  TouchableWithoutFeedback
} from "react-native";
import IconValuePair from "../../../components/IconValuePair";
import { FontAwesome } from "@expo/vector-icons";
import { INewsStory } from "../../../types/NewsStory";
import {
  Title,
  Caption,
  Text,
  useTheme,
  TouchableRipple
} from "react-native-paper";
import color from "color";

interface IProps {
  newsStory: INewsStory;
  onPress(): void;
}

const NewsStory: React.FC<IProps> = ({
  onPress,
  newsStory: {
    url,
    simplifiedUrl,
    title,
    author: { karma, id: authorId },
    score
  }
}) => {
  const theme = useTheme();

  const iconColor = color(theme.colors.text)
    .alpha(0.54)
    .rgb()
    .string();

  const contentColor = color(theme.colors.text)
    .alpha(0.8)
    .rgb()
    .string();

  const imageBorderColor = color(theme.colors.text)
    .alpha(0.15)
    .rgb()
    .string();
  return (
    <View style={styles.topRow}>
      <Text>{simplifiedUrl}</Text>
      <Title>{title}</Title>
      <Caption style={styles.handle}>{authorId}</Caption>
      <Caption style={[styles.handle, styles.dot]}>{"\u2B24"}</Caption>
    </View>
    // <SContainer>
    //   <TouchableWithoutFeedback onPress={onPress}>
    //     <View>
    //       <SUrl>{simplifiedUrl}</SUrl>
    //       <STitle>{title}</STitle>
    //     </View>
    //   </TouchableWithoutFeedback>
    //   <SInfoBar>
    //     <IconValuePair icon={<FontAwesome name="star" />} value={score} />
    //     <SAuthor>by: {authorId}</SAuthor>
    //     <IconValuePair icon={<FontAwesome name="heart" />} value={karma} />
    //   </SInfoBar>
    // </SContainer>
  );
};
// const SContainer = styled.View`
//   margin-bottom: 40px;
// `;
// const STitle = styled.Text`
//   ${({ theme }) => `
//   font-family: ${theme.fontFamily.primary.medium};
//   font-size: ${theme.fontSize.h2};
//  `}
//   margin-vertical: 4px;
// `;
// const SUrl = styled.Text`
//   ${({ theme }) => `
//     font-family: ${theme.fontFamily.secondary.regular};
//     font-size: ${theme.fontSize.body2};
//   `}
// `;

// const SInfoBar = styled.View`
//   flex-direction: row;
//   align-items: center;
// `;
// const SAuthor = styled.Text`
//   ${({ theme }) => `
//     font-family: ${theme.fontFamily.secondary.regular};
//     font-size: ${theme.fontSize.tiny};
// `}
//   margin-horizontal: 20px;
// `;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 15,
    paddingRight: 15
  },
  leftColumn: {
    width: 100,
    alignItems: "center"
  },
  rightColumn: {
    flex: 1
  },
  topRow: {
    flexDirection: "row",
    alignItems: "baseline"
  },
  handle: {
    marginRight: 3
  },
  dot: {
    fontSize: 3
  },
  image: {
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
    borderRadius: 20,
    width: "100%",
    height: 150
  },
  bottomRow: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconDescription: {
    marginLeft: 2,
    lineHeight: 12
  }
});

export default NewsStory;
