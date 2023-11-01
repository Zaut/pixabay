// Search.js
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const SerchText = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("test");
    onSearch(searchTerm);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Введите ключевое слово"
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.input}
      />
      <Button title="Поиск" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default SerchText;
