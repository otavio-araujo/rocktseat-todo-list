import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export const styles = StyleSheet.create({
  emptyTaskList: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: colors.gray[400],
  },

  emptyTaskListTextBold: {
    marginTop: 16,
    fontSize: 14,
    fontFamily: "Inter_700Bold",
    color: colors.gray[300],
  },

  emptyTaskListText: {
    marginTop: 4,
    fontFamily: "Inter_400Regular",
    color: colors.gray[300],
  },
})
