import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import PageHeader from "./components/PageHeader";
import Footer from "./components/Footer";
import Deck from "./components/Deck";
import ScoreProvider from "./contexts/ScoreContext";

export default function App() {
  return (
    <ScoreProvider>
      <View style={styles.container}>
        <PageHeader />
        <Deck />
        <Footer />
        <StatusBar style="auto" />
      </View>
    </ScoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FB6B6B",
    alignItems: "center",
  },
});
