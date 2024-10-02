import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import AntDesign from "@expo/vector-icons/AntDesign"

import { styles } from "./styles"
import { colors } from "../../constants/colors"

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/images/logo.png")} />
      </View>
      <View style={styles.content}>
        <View style={styles.addTaskContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.gray[300]}
          />
          <TouchableOpacity style={styles.addTaskButton}>
            <AntDesign name="pluscircleo" size={16} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.taskStatusBar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.taskStatusBarTextCreated}>Criadas</Text>
            <View style={styles.taskStatusBarIndicatorContainer}>
              <Text style={styles.taskStatusBarIndicator}>0</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.taskStatusBarTextCompleted}>Concluídas</Text>
            <View style={styles.taskStatusBarIndicatorContainer}>
              <Text style={styles.taskStatusBarIndicator}>0</Text>
            </View>
          </View>
        </View>

        <View style={styles.taskList}>
          <Image
            source={require("../../assets/images/clipboard.png")}
            style={{}}
          />
          <Text style={styles.taskListEmptyTextBold}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={styles.taskListEmptyText}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      </View>
    </View>
  )
}
