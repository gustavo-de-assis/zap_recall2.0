import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PageHeader from "./components/PageHeader";
import Footer from "./components/Footer";
import Card from "./components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <PageHeader />
      <Card isFlipped={true} idx={0} />
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
