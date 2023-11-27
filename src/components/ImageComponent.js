/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { getScreenWidth } from "../core/helper";
import FastImage from "react-native-fast-image";

function ImageComponent({ farm, server, secret, id, fit }) {
  return (
    <FastImage
      source={{
        uri: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`,
      }}
      style={fit ? styles.fitImages : styles.tinyLogo}
      resizeMode="cover"
      onLoadStart={() => <ActivityIndicator />}
      onLoadEnd={() => null}
    />
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    height: getScreenWidth() / 3,
    width: getScreenWidth() / 2 - 20,
    resizeMode: "cover",
    borderRadius: 10,
  },
  fitImages: {
    height: getScreenWidth(),
  },
});

export default ImageComponent;
