import Text from "components/base/Text/Text";
import { View, TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { COLORS } from "utils/theme/colors/colors";
import CardPlaceholder from "./CardPlaceholder";

export type CardType = {
  id: string;
  number: string;
  name: string;
  expDate: string;
  cvv: string;
};

type CardProps = {
  cardData: CardType | null;
  index: number;
  onPress?: () => void;
  variant?: CardVariant;
  style?: ViewStyle;
};

export type CardVariant = "green" | "black";

const Card = (props: CardProps) => {
  const {
    cardContainer,
    cardsContainer,
    cardDetailsContainer,
    cardNumberText,
  } = cardStyles;

  const { onPress, variant, style } = props;
  const isBlack = variant === "black";
  const textColor = isBlack ? "WHITE" : "DARK_GRAY";

  if (!props.cardData) {
    return (
      <CardPlaceholder
        isBlack={isBlack}
        style={style || {}}
        onPress={onPress}
      />
    );
  }

  const {
    cardData: { name, number, expDate },
  } = props;
  const last4Digits = number.length - 5;
  const backgroundColor = isBlack ? COLORS.TEXT.BLACK : COLORS.BASE.LIME_GREEN;
  
  return (
    <TouchableOpacity
      style={[
        cardContainer,
        {
          backgroundColor,
        },
      ]}
      onPress={onPress}
      disabled={!onPress}
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
          **** **** **** {last4Digits}
        </Text>
        <Text size="P1" color={textColor}>
          Validade {expDate}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const cardStyles = StyleSheet.create({
  cardContainer: {
    alignSelf: "center",
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
