import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Home({ navigation }) {
  const icon = require("../assets/zap.png");

  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.image} />
      <Text style={styles.label}>Zap Recall</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("Game");
        }}
      >
        <Text style={{ fontSize: 20 }}>Começar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#FB6B6B",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: 200,
    height: 240,
  },
  button: {
    width: 200,
    height: 80,
    backgroundColor: "#edd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  label: {
    fontSize: 40,
    color: "#fff",
  },
});
