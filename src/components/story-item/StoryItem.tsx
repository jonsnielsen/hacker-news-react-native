import React from "react";
import {
  View,
  StyleSheet,
  Linking,
  TouchableWithoutFeedback
} from "react-native";
import IconValuePair from "../IconCaption";
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
import { contentColor, fadedColor } from "../../theme/theme";
import IconCaption from "../IconCaption";
import * as WebBrowser from "expo-web-browser";

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
