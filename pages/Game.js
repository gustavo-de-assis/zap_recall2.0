import { StyleSheet, View } from "react-native";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Deck from "../components/Deck";

export default function Game() {
  return (
    <View style={styles.container}>
      <PageHeader />
      <Deck />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FB6B6B",
    alignItems: "center",
  },
});
