// ImageList.js
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ImageItem from "./ImageItem";

const ImageList = ({ images }) => {
  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      renderItem={({ item }) => <ImageItem image={item} />}
    />
  );
};

const styles = StyleSheet.create({});

export default ImageList;
