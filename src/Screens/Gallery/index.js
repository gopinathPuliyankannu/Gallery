/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getGalleryActions } from "../../stores/actions/Gallery.actions";
import ImageComponent from "../../components/ImageComponent";
import { useNavigation } from "@react-navigation/native";

function Gallery() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [refresh, setRefresh] = useState(false);
  const {
    Gallery: { photos },
  } = useSelector((store) => store.galleryList);

  const getGallery = async () => {
    setRefresh(true);
    let payload = {
      method: "flickr.galleries.getPhotos",
      api_key: "f9736f4d370f9c7115a952951b506569",
      gallery_id: "66911286-72157647277042064",
      format: "json",
      nojsoncallback: "1",
    };
    dispatch(getGalleryActions(payload, setRefresh));
  };

  useEffect(() => {
    getGallery();
  }, []);

  const selectedImages = (item) => {
    navigation.navigate("Details", { params: item });
  };

  const renderList = ({ item }) => {
    return (
      <TouchableOpacity style={styles.m_5} onPress={() => selectedImages(item)}>
        <ImageComponent
          farm={item.farm}
          server={item.server}
          id={item.id}
          secret={item.secret}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <FlatList
          refreshing={refresh}
          onRefresh={getGallery}
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
