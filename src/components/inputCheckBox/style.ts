import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  container: {
    flex: -1,
    flexDirection: "row",
    alignItems: "center",
  },
  containerCheckbox: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    width: 18,
    height: 18,
    borderRadius: 2,
  },
  label: {
    flex: 1,
  },
});

export default Style;
