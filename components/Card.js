import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import { useState } from "react";

export default function Card({ idx, card, viewdCards, onCardFlip }) {
  const [content, setContent] = useState(card.question);
  const [flipCard, setFlipCard] = useState(false);

  const showAnswer = () => {
    setContent(card.answer);
  };

  const showQuestion = () => {
    if (!viewdCards.includes(idx)) {
      setFlipCard(true);
      onCardFlip(idx);
    }
  };

  const answeredQuestion = () => {
    setFlipCard(false);
    setContent(card.question);
  };

  if (flipCard) {
    return (
      <View style={styles.flippedCardContainer}>
        <Text style={[styles.label, { textAlign: "center" }]}>{content}</Text>
        {content === card.question ? (
          <Pressable style={styles.turnCard} onPress={showAnswer}>
            <Fontisto name="arrow-return-left" size={30} color="#222" />
          </Pressable>
        ) : (
          <Pressable style={styles.turnCard} onPress={answeredQuestion}>
            <Fontisto name="arrow-return-right" size={30} color="#222" />
          </Pressable>
        )}
      </View>
    );
  }
  return (
    <View style={styles.nonFlippedCardContainer}>
      <Text style={styles.label}>Pergunta {idx + 1}</Text>
      {viewdCards.includes(idx) ? (
        <AntDesign name="check" size={30} color="#4a4" />
      ) : (
        <Pressable onPress={showQuestion}>
          <AntDesign name="rightsquareo" size={30} color="#222" />
        </Pressable>
      )}
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
    marginVertical: 10,
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
    marginVertical: 10,
  },
  turnCard: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
