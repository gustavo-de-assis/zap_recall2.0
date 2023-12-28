import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PageHeader from "./components/PageHeader";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { useState } from "react";

export default function App() {
  const [cardFlip, setCardFlip] = useState(false);

  const flipCard = () => {
    setCardFlip(!cardFlip);
  };

  return (
    <View style={styles.container}>
      <PageHeader />
      <Card isFlipped={cardFlip} idx={0} onPress={flipCard} />
      <Footer />
      <StatusBar style="auto" />
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
