import React, { ElementType } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS } from "utils/theme/colors/colors";
import { TYPOGRAPHY } from "utils/theme/typography/typography";
import Text from "../Text/Text";
import MaskInput, { MaskInputProps } from "react-native-mask-input";

type TextInputProps = {
  label: string;
  icon?: ElementType;
} & MaskInputProps;

const TextInput = ({
  placeholder,
  onChangeText,
  label,
  style,
  icon: Icon,
  ...rest
}: TextInputProps) => {
  const { container, marginBottom, inputContainer, marginRight, inputText } =
    styles;
  return (
    <View style={[style, container]}>
      <Text size="P2" color="WHITE" style={marginBottom}>
        {label}
      </Text>
      <View style={inputContainer}>
        {Icon && (
          <TouchableOpacity onPress={() => {}}>
            <Icon width={32} height={32} style={marginRight} />
          </TouchableOpacity>
        )}
        <MaskInput
          {...rest}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={inputText}
          placeholderTextColor={COLORS.TEXT.LIGHT_GRAY}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 78,
    marginBottom: 24,
  },
  marginBottom: { marginBottom: 8 },
  inputContainer: {
    backgroundColor: COLORS.BASE.WHITE,
    height: 45,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.BASE.ICE_WHITE,
    shadowColor: "#00000020",
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  marginRight: { marginRight: 10 },
  inputText: {
    color: COLORS.TEXT.DARK_GRAY,
    fontFamily: TYPOGRAPHY.FONT_FAMILIES.PT_SANS,
    fontSize: TYPOGRAPHY.FONT_SIZES.P1,
    flex: 1,
    height: 40,
  },
});

export default TextInput;
