import { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import decks from "../assets/decks";
import Card from "./Card";
import { FlatList, SafeAreaView } from "react-native-web";
import { ScoreContext } from "../contexts/ScoreContext";

export default function Deck({ navigation }) {
  const deck = decks.deck1;
  const [viewedCards, setViewdCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(-1);
  const { setNumOfQuestions, setDeckTheme } = useContext(ScoreContext);

  useEffect(() => {
    const numOfQuestions = deck.questions.length;
    setNumOfQuestions(numOfQuestions);
    setDeckTheme(deck.theme);
  }, []);

  const onCardFlip = (index) => {
    setViewdCards((prevViewedCards) => [...prevViewedCards, index]);
  };

  const cardSelection = (index) => {
    setSelectedCard(index);
  };

  if (viewedCards.length === deck.questions.length) {
    return (
      <View style={styles.endGame}>
        <Text style={styles.label}>Acabaram os Cartões!</Text>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={{ fontSize: 20 }}>Retornar</Text>
        </Pressable>
      </View>
    );
  }

  if (selectedCard >= 0) {
    return (
      <View style={styles.deckContainer}>
        <Card
          key={selectedCard}
          idx={selectedCard}
          card={deck.questions[selectedCard]}
          viewedCards={viewedCards}
          selected={selectedCard}
          onCardFlip={onCardFlip}
          cardSelection={cardSelection}
        />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.deckContainer}>
      <FlatList
        data={deck.questions}
        renderItem={({ item, index }) => (
          <Card
            key={index}
            idx={index}
            card={item}
            viewedCards={viewedCards}
            selected={selectedCard}
            onCardFlip={onCardFlip}
            cardSelection={cardSelection}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  deckContainer: {
    height: 500,
    gap: 10,
    alignItems: "center",
  },
  endGame: {
    width: 380,
    height: 500,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#eed",
    borderRadius: 5,
  },
  label: {
    fontSize: 40,
  },
  button: {
    width: 200,
    height: 60,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#aaa",
  },
});
