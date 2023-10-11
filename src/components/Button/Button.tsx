import Text from "components/base/Text/Text";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { COLORS } from "utils/theme/colors/colors";

type ButtonVariant = "green" | "blue";
type ButtonProps = {
  label: string;
  variant?: ButtonVariant;
} & TouchableOpacityProps;
const Button = ({ variant, label, onPress }: ButtonProps) => {
  const backgroundColor =
    variant === "green" ? COLORS.BASE.LIME_GREEN : COLORS.BASE.CIAN_BLUE;

  return (
    <TouchableOpacity
      style={{
        paddingVertical: 16,
        marginVertical: 10,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        borderRadius: 12,
        backgroundColor,
      }}
      onPress={onPress}
    >
      <Text color={variant === "green" ? "DARK_BLUE" : "WHITE"}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
