import Text from "components/base/Text/Text";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "utils/theme/colors/colors";

export type CardType = {
  id: string;
  number: string;
  name: string;
  expDate: string;
  cvv: string;
};

type CardProps = {
  cardData: CardType;
  index: number;
  onPress: () => void;
  variant?: "black" | "green";
  selected?: boolean;
};

const Card = ({
  cardData: { name, number, cvv },
  variant = "black",
  index = 0,
  selected = false,
}: CardProps) => {
  const {
    cardContainer,
    cardsContainer,
    cardDetailsContainer,
    cardNumberText,
  } = styles;

  const isBlack = variant === "black";
  const textColor = isBlack ? "WHITE" : "DARK_GRAY";

  return (
    <TouchableOpacity
      style={[
        cardContainer,
        {
          bottom: 0 + 60 * index,
          backgroundColor: isBlack ? COLORS.TEXT.BLACK : COLORS.BASE.LIME_GREEN,
          zIndex: 999 - index,
        },
      ]}
    >
      <View style={cardsContainer}>
        <Text size="H4" color={textColor}>
          {isBlack ? "Black" : "Green"} Card
        </Text>
      </View>
      <View style={cardDetailsContainer}>
        <Text size="P1" color={textColor}>
          {name}
        </Text>
        <Text color={textColor} style={cardNumberText}>
          **** **** **** {number.substring(number.length - 5)}
        </Text>
        <Text size="P1" color={textColor}>
          Validade {cvv}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    position: "absolute",
    height: 180,
    width: 300,
    borderRadius: 16,
    padding: 12,
  },
  cardsContainer: { flex: 0.4, justifyContent: "center" },
  cardDetailsContainer: {
    flex: 0.6,
    justifyContent: "space-evenly",
    paddingBottom: 16,
  },
  cardNumberText: { textAlignVertical: "center" },
});

export default Card;
