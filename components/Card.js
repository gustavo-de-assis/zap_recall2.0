import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Fontisto } from "@expo/vector-icons";

export default function Card({ isFlipped, idx }) {
  if (isFlipped) {
    return (
      <View style={styles.flippedCardContainer}>
        <Text style={styles.label}>Quantos anos você tem?</Text>
        <Fontisto
          style={styles.turnCard}
          name="arrow-return-left"
          size={30}
          color="#222"
        />
      </View>
    );
  }
  return (
    <View style={styles.nonFlippedCardContainer}>
      <Text style={styles.label}>Pergunta {idx + 1}</Text>
      <AntDesign name="rightsquareo" size={30} color="#222" />
    </View>
  );
}

const styles = StyleSheet.create({
  nonFlippedCardContainer: {
    width: 380,
    height: 150,
    flexDirection: "row",
    backgroundColor: "#eed",
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 32,
    color: "#222",
  },
  flippedCardContainer: {
    width: 380,
    height: 200,
    flexDirection: "row",
    backgroundColor: "#eed",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    position: "relative",
  },
  turnCard: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
