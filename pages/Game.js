import { StyleSheet, View } from "react-native";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Deck from "../components/Deck";
import { useContext, useState } from "react";
import { ScoreContext } from "../contexts/ScoreContext";

export default function Game({ navigation }) {
  const { resetScore } = useContext(ScoreContext);

  useState(() => {
    resetScore();
  }, []);

  return (
    <View style={styles.container}>
      <PageHeader />
      <Deck navigation={navigation} />
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
