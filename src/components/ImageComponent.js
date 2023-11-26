/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StyleSheet } from "react-native";
import { getScreenWidth } from "../core/helper";
import FastImage from "react-native-fast-image";

function ImageComponent({ farm, server, secret, id }) {
  return (
    <FastImage
      source={{
        uri: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`,
      }}
      style={styles.tinyLogo}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    height: getScreenWidth() / 3,
    width: getScreenWidth() / 2 - 20,
    resizeMode: "cover",
  },
});

export default ImageComponent;
