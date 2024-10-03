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
    // Validates id the task is not empty
    if (!task.trim()) {
      return Alert.alert(
        "Tarefa vazia",
        "Você não pode adicionar uma tarefa vazia."
      )
    }

    // Validates if the task is too short
    if (task.length < 3) {
      return Alert.alert(
        "Tarefa muito curta",
        "Sua tarefa deve conter no mínimo 3 caracteres."
      )
    }

    // Validates if the task already exists
    if (tasks.find((currentTask) => currentTask.task === task)) {
      return Alert.alert(
        "Tarefa existente",
        "Você não pode adicionar uma tarefa que já existe."
      )
    }

    const newTask = {
      id: Crypto.randomUUID(),
      task,
      isCompleted: false,
    }

    setTasks((oldState) => [...oldState, newTask])

    setTask("")
  }

  function handleRemove({ id }: TaskItemProps) {
    Alert.alert(
      "Remover tarefa",
      "Tem certeza que deseja remover essa tarefa?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            setTasks((oldState) => oldState.filter((task) => task.id !== id))
          },
        },
      ]
    )
  }

  function handleCompleted({ id }: TaskItemProps) {
    return console.warn(id)
    setTasks((oldState) =>
      oldState.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          }
        }
        return task
      })
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
          renderItem={({ item }) => (
            <TaskItem
              task={item.task}
              id={item.id}
              isCompleted={item.isCompleted}
              onRemove={() => handleRemove(item)}
              onCompleted={() => handleCompleted(item)}
            />
          )}
          contentContainerStyle={{ gap: 8, marginTop: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
