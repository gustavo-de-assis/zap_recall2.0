import { Image, StyleSheet, View } from "react-native";

export default function PageHeader() {
  const headerImage = require("../assets/zaprecall.png");

  return (
    <View style={styles.headerContainer}>
      <Image source={headerImage} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: 400,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  image: {
    width: 300,
    height: 70,
  },
});
