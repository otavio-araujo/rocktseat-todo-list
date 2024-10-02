import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export const styles = StyleSheet.create({
  emptyTaskList: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 48,
    paddingHorizontal: 20,
  },

  emptyTaskListTextBold: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: "bold",
    color: colors.gray[300],
  },

  emptyTaskListText: {
    marginTop: 4,
    fontSize: 14,
    color: colors.gray[300],
  },
})
