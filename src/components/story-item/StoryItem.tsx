import React from "react";
import {
  View,
  StyleSheet,
  Linking,
  TouchableWithoutFeedback
} from "react-native";
import IconValuePair from "../icon-caption";
import { FontAwesome } from "@expo/vector-icons";
import { IStory } from "../../types/Story";
import {
  Title,
  Caption,
  Text,
  useTheme,
  TouchableRipple
} from "react-native-paper";
import color from "color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useCustomTheme } from "../../theme";
import IconCaption from "../icon-caption";
import * as WebBrowser from "expo-web-browser";

interface IProps {
  story: IStory;
  onPress(): void;
}

const NewsStory: React.FC<IProps> = ({
  onPress,
  story: { url, simplifiedUrl, title, author, score }
}) => {
  const theme = useTheme();
  const { contentColor, fadedColor } = useCustomTheme();

  // const { karma, id: authorId } = author;
  const karma = author?.karma;
  const authorId = author?.id;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.wrapper}>
        {/* <Text style={[{ color: fadedColor }]}>{simplifiedUrl}</Text> */}
        <TouchableWithoutFeedback
          onPress={() => WebBrowser.openBrowserAsync(url)}
        >
          <Text style={[{ color: fadedColor }]}>{simplifiedUrl}</Text>
        </TouchableWithoutFeedback>
        <Title style={{ color: contentColor }}>{title}</Title>

        <View style={styles.bottomRow}>
          <IconCaption icon="star-outline" caption={score} />
          <IconCaption caption={"by: " + authorId} />
          <IconCaption icon="heart-outline" caption={karma} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 25
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default NewsStory;
