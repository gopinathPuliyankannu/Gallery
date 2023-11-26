/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, View } from "react-native";
import { getScreenWidth } from "../../core/helper";
import { useDispatch, useSelector } from "react-redux";
import { getGalleryActions } from "../../stores/actions/Gallery.actions";
import ImageComponent from "../../components/ImageComponent";

function Gallery() {
  const dispatch = useDispatch();
  const {
    Gallery: { photos },
  } = useSelector((store) => store.galleryList);

  const getGallery = async () => {
    let payload = {
      method: "flickr.galleries.getPhotos",
      api_key: "f9736f4d370f9c7115a952951b506569",
      gallery_id: "66911286-72157647277042064",
      format: "json",
      nojsoncallback: "1",
    };
    dispatch(getGalleryActions(payload));
  };

  useEffect(() => {
    getGallery();
  }, []);

  const renderList = ({ item }) => {
    return (
      <View style={styles.m_5}>
        <ImageComponent
          farm={item.farm}
          server={item.server}
          id={item.id}
          secret={item.secret}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          data={photos?.photo}
          numColumns={2}
          renderItem={renderList}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  sectionContainer: {
    paddingHorizontal: 10,
  },
  m_5: { margin: 5 },
});

export default Gallery;
