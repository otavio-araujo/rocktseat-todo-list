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

  taskStatusBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 32,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[400],
  },

  taskStatusBarTextCreated: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.blue.light,
  },

  taskStatusBarTextCompleted: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.purple.light,
  },

  taskStatusBarIndicatorContainer: {
    backgroundColor: colors.gray[400],
    minWidth: 32,
    borderRadius: 999,
    padding: 8,
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  taskStatusBarIndicator: {
    color: colors.gray[200],
  },

  taskList: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 48,
    paddingHorizontal: 20,
  },

  taskListEmptyTextBold: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: "bold",
    color: colors.gray[300],
  },

  taskListEmptyText: {
    marginTop: 4,
    fontSize: 14,
    color: colors.gray[300],
  },
})
