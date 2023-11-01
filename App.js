import { SafeAreaView, View, StyleSheet } from "react-native";
import PixabayComponnent from "./components/PixabayComponnent";

export default function App() {
  return (
    <SafeAreaView style={style.safeAre}>
      <PixabayComponnent />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeAre: {
    marginTop: 40,
    marginLeft: 5,
  },
});
