import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    borderWidth: 2,
    borderColor: colors.blue.light,
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: colors.purple.dark,
    borderColor: colors.purple.dark,
  },
})
