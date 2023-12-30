import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import decks from "../assets/decks";
import Card from "./Card";
import { FlatList, SafeAreaView } from "react-native-web";
import { ScoreContext } from "../contexts/ScoreContext";

export default function Deck() {
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
    return <View style={styles.endGame}>Fim de Jogo</View>;
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
    justifyContent: "center",
    backgroundColor: "#eed",
    borderRadius: 5,
    fontSize: 40,
  },
});
