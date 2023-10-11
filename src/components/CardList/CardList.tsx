import { Card, CardType } from "components";
import { useState } from "react";
import { View } from "react-native";

const CardList = ({ data }: { data: CardType[] }) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      {!selectedCard &&
        data.map((item, index) => {
          return (
            <Card
              key={item.id}
              cardData={item}
              variant={index % 2 == 0 ? "green" : "black"}
              index={index}
              selected={selectedCard === index}
              onPress={() => setSelectedCard(index)}
            />
          );
        })}
    </View>
  );
};

export default CardList;
