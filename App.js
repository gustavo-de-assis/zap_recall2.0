import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PageHeader from "./components/PageHeader";
import Footer from "./components/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <PageHeader />
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
