import React, { forwardRef, Ref } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface InputProps extends TextInputProps {
  title: string;
  errorMessages?: string;
  hint?: string;
  inputColor?: string;
  disabled?: boolean;
}

const InputText = forwardRef(
  ({ ...otherProps }: InputProps, ref: Ref<TextInput>) => {
    const {
      title,
      style,
      disabled,
      hint,
      errorMessages,
      value,
      inputColor = "black",
    } = otherProps;
    return (
      <View style={{ marginBottom: 22 }}>
        <Text
          style={{
            color: inputColor,
            marginBottom: 8,
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {title}
        </Text>
        <TextInput
          ref={ref}
          editable={!disabled}
          style={[style, Styles.textInput]}
          {...otherProps}
        />

        {errorMessages && (
          <Text style={{ color: "red", fontSize: 12 }}>{errorMessages}</Text>
        )}
        {hint && value && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 4,
              paddingHorizontal: 8,
              borderRadius: 8,
              marginTop: 4,
            }}
          >
            <Icon name="alert-circle" size={15} color="green" />
            <Text style={{ color: inputColor, marginLeft: 4, fontSize: 10 }}>
              <Text style={{ color: hint === "Gratis" ? "green" : "white" }}>
                {hint}
              </Text>
            </Text>
          </View>
        )}
      </View>
    );
  }
);

const Styles = StyleSheet.create({
  textInput: {
    color: "black",
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 1,
    width: 200,
  },
});

export default InputText;
