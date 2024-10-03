import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    minWidth: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: colors.gray[400],
    borderRadius: 8,
    backgroundColor: colors.gray[500],
    padding: 12,
    paddingRight: 8,
    gap: 8,
  },

  taskText: {
    flex: 1,
    color: colors.gray[100],
    fontSize: 14,
    fontWeight: "bold",
  },

  taskTextCompleted: {
    flex: 1,
    color: colors.gray[300],
    fontSize: 14,
    textDecorationLine: "line-through",
  },

  trashButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
  },

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
