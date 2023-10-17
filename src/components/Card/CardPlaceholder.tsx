import Text from "components/base/Text/Text";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import { cardStyles } from "./Card";
import { COLORS } from "utils/theme";

type CardPlaceholderProps = {
  isBlack: boolean;
  onPress: (() => void) | undefined;
  style: ViewStyle;
};
const CardPlaceholder = ({ isBlack, onPress, style }: CardPlaceholderProps) => {
  const { cardContainer, cardsContainer } = cardStyles;
  const textColor = isBlack ? "WHITE" : "DARK_GRAY";
  return (
    <TouchableOpacity
      style={[
        style,
        cardContainer,
        {
          backgroundColor: isBlack ? COLORS.TEXT.BLACK : COLORS.BASE.LIME_GREEN,
        },
      ]}
      onPress={onPress}
    >
      <View style={cardsContainer}>
        <Text size="H4" color={textColor}>
          {isBlack ? "Black" : "Green"} Card
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardPlaceholder;
