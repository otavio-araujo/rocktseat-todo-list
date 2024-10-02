import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import AntDesign from "@expo/vector-icons/AntDesign"

import { styles } from "./styles"
import { colors } from "../../constants/colors"
import { EmptyTaskList } from "../../components/EmptyTaskList"
import { TasksStatusBar } from "../../components/TasksStatusBar"
import { TaskItem } from "../../components/TaskItem"

const tasks = [
  "Integer urna interdum massa libero auctor neque turpis turpis semper.",
  "Integer urna interdum massa libero auctor neque turpis turpis .",
  "Integer urna interdum massa libero auctor neque  turpis semper.",
  "Integer urna interdum massa  auctor neque turpis  semper.",
  "Integer urna interdum massa libero  neque turpis turpis semper.",
  "Integer urna  massa libero auctor interdum neque  turpis semper.",
  "Integer urna  massa libero auctor neque  turpis semper.",
  "Integer urna interdum  libero auctor neque turpis turpis .",
]

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

        <TasksStatusBar />
        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          ListEmptyComponent={() => <EmptyTaskList />}
          renderItem={({ item }) => <TaskItem task={item} />}
          contentContainerStyle={{ gap: 8 }}
        />
      </View>
    </View>
  )
}
