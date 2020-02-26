import React from "react";
import {
  View,
  StyleSheet,
  Linking,
  TouchableWithoutFeedback
} from "react-native";
import IconValuePair from "../../../components/IconValuePair";
import { FontAwesome } from "@expo/vector-icons";
import { IStory } from "../../../types/Story";
import {
  Title,
  Caption,
  Text,
  useTheme,
  TouchableRipple
} from "react-native-paper";
import color from "color";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IProps {
  story: IStory;
  onPress(): void;
}

const NewsStory: React.FC<IProps> = ({
  onPress,
  story: {
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
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text>{simplifiedUrl}</Text>
      <Title>{title}</Title>
      <View style={styles.bottomRow}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            size={18}
            name="star-outline"
            color={iconColor}
          />
          <Caption style={styles.iconDescription}>{score}</Caption>
        </View>
        <Text>by: {authorId}</Text>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            size={18}
            name="cards-heart"
            color={iconColor}
          />
          <Caption style={styles.iconDescription}>{karma}</Caption>
        </View>

        {/* <IconValuePair icon={<FontAwesome name="star" />} value={score} />
    //     <SAuthor>by: {authorId}</SAuthor>
    //     <IconValuePair icon={<FontAwesome name="heart" />} value={karma} /> */}

        {/* <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={12}
                  color={iconColor}
                />
                <Caption style={styles.iconDescription}>
                  {props.comments}
                </Caption>
              </View */}
      </View>
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
    paddingTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  leftColumn: {
    width: 100,
    alignItems: "center"
  },
  rightColumn: {
    flex: 1
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  handle: {
    marginRight: 3
  },
  image: {
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
    borderRadius: 20,
    width: "100%",
    height: 150
  },
  // bottomRow: {
  //   paddingVertical: 10,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between"
  // },
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
