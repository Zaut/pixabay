// ImageItem.js
import React from "react";
import { Image, View, StyleSheet } from "react-native";

const ImageItem = ({ image }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image.previewURL }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    width: 115,
    height: 100,
    borderRadius: 10,
  },
});

export default ImageItem;
