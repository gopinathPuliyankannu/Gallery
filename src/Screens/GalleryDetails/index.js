/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from "react";

import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Dimensions,
  useColorScheme,
  View,
} from "react-native";

const Width = Dimensions.get("screen").width;

function GalleryDetails() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getGallery = async () => {
    try {
      const response = await fetch(
        "https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=f9736f4d370f9c7115a952951b506569&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1"
      );
      const json = await response.json();
      setData(json.photos?.photo);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGallery();
  }, []);

  const renderList = ({ item }) => {
    return (
      <View
        style={{
          // flex: 1,
          margin: 5,
        }}
      >
        <Image
          style={styles.tinyLogo}
          source={{
            uri: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`,
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <FlatList data={data} numColumns={2} renderItem={renderList} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  tinyLogo: {
    height: Width / 3,
    width: Width / 2 - 20,
    resizeMode: "cover",
  },
  sectionContainer: {
    // marginTop: 32,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default GalleryDetails;
