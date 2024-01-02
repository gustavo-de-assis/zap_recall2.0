import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useFonts, Righteous_400Regular } from "@expo-google-fonts/righteous";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function Home({ navigation }) {
  const icon = require("../assets/zap.png");

  let [fontsLoaded] = useFonts({
    Righteous_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Image source={icon} style={styles.image} />
      <Text style={[styles.label, { fontFamily: "Righteous_400Regular" }]}>
        Zap Recall
      </Text>
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
    height: 60,
    backgroundColor: "#edd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#aB5B5B",
  },
  label: {
    fontSize: 60,
    color: "#fff",
  },
});
