import { Button, Card, CardType } from "components";
import { CardVariant } from "components/Card/Card";
import useCards from "hooks/useCards";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

type SelectedCard = {
  card: CardType;
  variant: CardVariant;
};

const CardList = () => {
  const [selectedCard, setSelectedCard] = useState<SelectedCard | null>(null);

  const { cards, getCards } = useCards();
  useEffect(() => {
    getCards();
  }, []);

  const selectCard = (card: CardType, variant: CardVariant) => {
    const newSelectedCard: SelectedCard = {
      card,
      variant,
    } satisfies SelectedCard;
    setSelectedCard(newSelectedCard);
  };

  const {
    container,
    buttonContainer,
    buttonStyle,
    cardContainer,
    cardPlaceholderContainer,
  } = styles;

  return selectedCard === null ? (
    <>
      <View style={container}>
        {cards.map((item, index) => {
          const variant = index % 2 == 0 ? "green" : "black";
          return (
            <View
              key={`view-${item.id}`}
              style={{
                position: "absolute",
                bottom: 0 + 60 * index,
                zIndex: 999 - index,
              }}
            >
              <Card
                key={item.id}
                cardData={item}
                variant={variant}
                index={index}
                onPress={() => selectCard(item, variant)}
              />
            </View>
          );
        })}
      </View>
      <View style={buttonContainer}>
        <Button label="usar este cartão" variant="hyperlink" />
      </View>
    </>
  ) : (
    <View style={cardPlaceholderContainer}>
      <Card
        cardData={selectedCard.card}
        index={0}
        variant={selectedCard.variant}
      />
      <Button label="pagar com este cartão" style={buttonStyle} />
      <Card
        style={cardContainer}
        key={"card-placeholder"}
        cardData={null}
        variant={selectedCard.variant == "black" ? "green" : "black"}
        index={0}
        onPress={() => setSelectedCard(null)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", flex: 0.7 },
  buttonContainer: { flex: 0.3 },
  buttonStyle: { width: 300, marginTop: 32 },
  cardContainer: { position: "absolute", bottom: -100, opacity: 0.5 },
  cardPlaceholderContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
export default CardList;
