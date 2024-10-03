import { Text, View } from "react-native"
import { styles } from "./styles"

export function TasksStatusBar({ tasksCreated = 0, tasksCompleted = 0 }) {
  return (
    <View style={styles.tasksStatusBar}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.tasksStatusBarTextCreated}>Criadas</Text>
        <View style={styles.tasksStatusBarIndicatorContainer}>
          <Text style={styles.tasksStatusBarIndicator}>{tasksCreated}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.tasksStatusBarTextCompleted}>Concluídas</Text>
        <View style={styles.tasksStatusBarIndicatorContainer}>
          <Text style={styles.tasksStatusBarIndicator}>{tasksCompleted}</Text>
        </View>
      </View>
    </View>
  )
}
