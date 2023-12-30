import { useState } from "react";
import { StyleSheet, View } from "react-native";
import decks from "../assets/decks";
import Card from "./Card";
import { FlatList, SafeAreaView } from "react-native-web";

export default function Deck() {
  const deck = decks.deck1;
  const [viewdCards, setViewdCards] = useState([]);

  const onCardFlip = (index) => {
    setViewdCards((prevViewedCards) => [...prevViewedCards, index]);
    console.log(viewdCards);
  };

  return (
    <SafeAreaView style={styles.deckContainer}>
      <FlatList
        data={deck}
        renderItem={({ item, index }) => (
          <Card
            key={index}
            idx={index}
            card={item}
            viewdCards={viewdCards}
            onCardFlip={onCardFlip}
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
