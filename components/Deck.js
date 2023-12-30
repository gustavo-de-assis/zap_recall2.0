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
  const { setNumOfQuestions } = useContext(ScoreContext);

  useEffect(() => {
    const numOfQuestions = deck.length;
    setNumOfQuestions(numOfQuestions);
  }, []);

  const onCardFlip = (index) => {
    setViewdCards((prevViewedCards) => [...prevViewedCards, index]);
  };

  const cardSelection = (index) => {
    setSelectedCard(index);
  };

  if (selectedCard >= 0) {
    return (
      <View style={styles.deckContainer}>
        <Card
          key={selectedCard}
          idx={selectedCard}
          card={deck[selectedCard]}
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
        data={deck}
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
});
