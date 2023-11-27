/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import { getScreenWidth } from "../core/helper";
import FastImage from "react-native-fast-image";

function ImageComponent({ farm, server, secret, id, fit, index }) {
  const [loadingstate, setloadingState] = React.useState({});

  return (
    <>
      <FastImage
        source={{
          uri: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.png`,
        }}
        style={fit ? styles.fitImages : styles.tinyLogo}
        resizeMode="cover"
        onLoadStart={() =>
          setloadingState(() => ({
            ...loadingstate,
            [index]: true,
          }))
        }
        onLoadEnd={() =>
          setloadingState((props) => ({
            ...props,
            [index]: false,
          }))
        }
        onError={(e) => <ActivityIndicator color={"red"} />}
      >
        {loadingstate[index] && (
          <View style={[styles.images, styles.tinyLogo]}>
            <ActivityIndicator color={"red"} />
          </View>
        )}
      </FastImage>
    </>
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
  images: {
    justifyContent: "center",
  },
});

export default ImageComponent;
