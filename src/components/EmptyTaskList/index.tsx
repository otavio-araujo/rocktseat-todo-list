import { Image, Text, View } from "react-native"
import { styles } from "./styles"

export function EmptyTaskList() {
  return (
    <View style={styles.emptyTaskList}>
      <Image source={require("../../assets/images/clipboard.png")} style={{}} />
      <Text style={styles.emptyTaskListTextBold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.emptyTaskListText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
