import React from "react";
import { View, StyleSheet } from "react-native";
import { IComment } from "../../types/Comment";
import IconCaption from "../icon-caption";
import { timeSince } from "../../utils/time";
import WebView from "../web-view";

interface IProps extends IComment {}

const Comment: React.FC<IProps> = ({ by, text, kids, time }) => {
  return (
    <View style={styles.wrapper}>
      <IconCaption caption={`${by} - ${timeSince(time)} ago`} />
      <WebView html={text} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20
  }
});

export default Comment;
