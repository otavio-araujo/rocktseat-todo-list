import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native"
import { useState } from "react"
import * as Crypto from "expo-crypto"
import AntDesign from "@expo/vector-icons/AntDesign"

import { styles } from "./styles"
import { colors } from "../../constants/colors"

import { EmptyTaskList } from "../../components/EmptyTaskList"
import { TasksStatusBar } from "../../components/TasksStatusBar"
import { TaskItem, TaskItemProps } from "../../components/TaskItem"

export function Home() {
  const [tasks, setTasks] = useState<TaskItemProps[]>([])
  const [task, setTask] = useState<string>("")

  function handleAddTask() {
    if (!task)
      return Alert.alert(
        "Tarefa vazia",
        "Você não pode adicionar uma tarefa vazia."
      )
  }

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
            onChangeText={setTask}
            value={task}
          />
          <TouchableOpacity
            style={styles.addTaskButton}
            onPress={handleAddTask}
          >
            <AntDesign name="pluscircleo" size={16} color="white" />
          </TouchableOpacity>
        </View>

        <TasksStatusBar />
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => <EmptyTaskList />}
          renderItem={({ item }) => <TaskItem task={item.task} id={item.id} />}
          contentContainerStyle={{ gap: 8, marginTop: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
