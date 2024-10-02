import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native"
import AntDesign from "@expo/vector-icons/AntDesign"

import { styles } from "./styles"
import { colors } from "../../constants/colors"

import { TaskItem, TaskItemProps } from "../../components/TaskItem"
import { EmptyTaskList } from "../../components/EmptyTaskList"
import { TasksStatusBar } from "../../components/TasksStatusBar"
import { useState } from "react"

export function Home() {
  const [tasks, setTasks] = useState<TaskItemProps[]>([])

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
