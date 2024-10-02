import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.page,
  },

  header: {
    height: 173,
    backgroundColor: colors.gray[700],
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.gray[600],
    padding: 24,
  },

  addTaskContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    position: "absolute",
    marginTop: -27,
  },

  addTaskButton: {
    backgroundColor: colors.blue.light,
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    marginLeft: 4,
  },

  textInput: {
    width: "100%",
    backgroundColor: colors.gray[500],
    borderColor: colors.gray[700],
    borderWidth: 1,
    height: 54,
    borderRadius: 6,
    padding: 16,
    color: colors.gray[300],
    fontSize: 16,
  },
})
