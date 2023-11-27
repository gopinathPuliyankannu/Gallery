import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageComponent from "../../components/ImageComponent";

function GalleryDetails() {
  const {
    params: { params },
  } = useRoute();

  const Details = {
    Id: params.id,
    Server: params.server,
    Secret: params.secret,
    owner: params.owner,
  };

  return (
    <View>
      <ImageComponent
        fit
        farm={params.farm}
        server={params.server}
        id={params.id}
        secret={params.secret}
      />
      <Text style={styles.Tittle}>{params.title}</Text>
      {Object.entries(Details).map((item, index) => {
        return (
          <View key={index} style={styles.BlockContainer}>
            <Text style={[styles.ServerText, styles.boldText]}>{item[0]}:</Text>
            <Text style={styles.ServerText}>{item[1]}</Text>
          </View>
        );
      })}
    </View>
  );
}

export default GalleryDetails;

const styles = StyleSheet.create({
  Tittle: {
    textAlign: "center",
    fontSize: 24,
    padding: 10,
    fontWeight: "bold",
  },
  BlockContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginTop: 5,
  },
  boldText: {
    fontWeight: 600,
  },
  ServerText: {
    fontSize: 20,
  },
});
