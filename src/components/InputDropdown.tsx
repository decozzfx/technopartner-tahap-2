import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleProp, ViewStyle, View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface IProps {
  setSelectedValue: (arg0: string) => void;
  disabled?: boolean;
  selectedValue: string | null;
  optionsData: IOptionData[];
  error?: string;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  placeholder?: string;
  listMode?: "DEFAULT" | "FLATLIST" | "SCROLLVIEW" | "MODAL";
  screenName?: string;
  index?: string;
  inputName?: string;
  isRequired?: boolean;
  fontLabelSize?: number;
  marginBottom?: number;
}

interface IOptionData {
  value: string;
  label: string;
}

export default function InputDropdown(props: IProps) {
  const {
    disabled = false,
    setSelectedValue,
    selectedValue,
    optionsData = [],
    error = "",
    style,
    loading,
    placeholder,
    listMode = "SCROLLVIEW",
    screenName = "",
    index = "",
    inputName = "",
    // labelFloatToBorder,
    isRequired,
    marginBottom = 0,
  } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <View style={{ marginBottom }}>
      <Text style={{ color: "black" }}>
        {selectedValue ? placeholder : ""}
        {isRequired ? " *" : null}
      </Text>
      <View>
        <DropDownPicker
          testID={screenName + inputName + index}
          scrollViewProps={{
            scrollEnabled: true,
            nestedScrollEnabled: true,
          }}
          theme="LIGHT"
          disabled={disabled}
          loading={loading}
          open={isDropdownOpen}
          setOpen={(val) => setIsDropdownOpen(val)}
          setValue={(val) => setSelectedValue(val(null))}
          value={selectedValue}
          listMode={listMode}
          placeholder={placeholder}
          items={optionsData.map((data) => {
            return {
              value: data?.value,
              label: data?.label,
            };
          })}
          style={[styles.drowDownContainer, style]}
          textStyle={{
            fontFamily: "Montserrat-SemiBold",
            fontSize: 16,
            marginLeft: 5,
            color: "grey",
          }}
          ArrowDownIconComponent={() => (
            <Icon name="chevron-down" color="grey" size={30} />
          )}
          ArrowUpIconComponent={() => (
            <Icon name="chevron-up" color="grey" size={30} />
          )}
          TickIconComponent={() => <Icon name="check" color="grey" size={25} />}
          dropDownContainerStyle={{
            borderColor: "grey",
            backgroundColor: "white",
            position: "absolute",
            top: 50,
            zIndex: 100000,
          }}
        />
        {error !== "" && (
          <>
            <Text style={{ color: "red" }}>{error}</Text>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drowDownContainer: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(160, 21, 62, 0.3)",
    zIndex: 1000,
    height: 50,
  },
});
