import React, { useEffect, useState } from "react";
import { View } from "react-native";
import axios from "axios";
import ImageList from "../components/ImagesList";
import SearchText from "./SerchText";

const PixabayComponnent = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchImages = () => {
    if (searchTerm.trim() === "") {
      setImages([]);
      return;
    }

    const apiUrl = `https://pixabay.com/api/?key=37330853-0f443d705b43389accb637998&q=${searchTerm}&image_type=photo&per_page=50`;
    axios
      .get(apiUrl)
      .then((response) => {
        setImages(response.data.hits);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchImages();
  }, [searchTerm]);

  return (
    <View>
      <SearchText onSearch={setSearchTerm} />
      <ImageList images={images} />
    </View>
  );
};

export default PixabayComponnent;
