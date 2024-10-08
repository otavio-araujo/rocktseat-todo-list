import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export const styles = StyleSheet.create({
  tasksStatusBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 32,
    paddingBottom: 20,
  },

  tasksStatusBarTextCreated: {
    fontSize: 14,
    fontFamily: "Inter_700Bold",
    color: colors.blue.light,
  },

  tasksStatusBarTextCompleted: {
    fontSize: 14,
    fontFamily: "Inter_700Bold",
    color: colors.purple.light,
  },

  tasksStatusBarIndicatorContainer: {
    backgroundColor: colors.gray[400],
    minWidth: 32,
    borderRadius: 999,
    padding: 8,
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  tasksStatusBarIndicator: {
    color: colors.gray[200],
    fontFamily: "Inter_700Bold",
    fontSize: 12,
  },
})
