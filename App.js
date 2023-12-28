import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PageHeader from "./components/PageHeader";
import ZapButton from "./components/ZapButton";

export default function App() {
  return (
    <View style={styles.container}>
      <PageHeader />
      {/*  <ZapButton
        color="#777"
        label="teste"
        onPress={() => {
          alert("oi!");
        }}
      /> */}
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
