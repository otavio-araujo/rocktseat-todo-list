import { View, Text, TouchableOpacity } from "react-native"
import EvilIcons from "@expo/vector-icons/EvilIcons"

import { styles } from "./styles"
import { colors } from "../../constants/colors"
import { Checkbox } from "../Checkbox"

export type TaskItemProps = {
  id: string
  task: string
}

export function TaskItem({ id, task }: TaskItemProps) {
  return (
    <View style={styles.container}>
      <Checkbox />
      <Text style={styles.taskText}>{task}</Text>
      <TouchableOpacity style={styles.trashButton}>
        <EvilIcons name="trash" size={24} color={colors.gray[300]} />
      </TouchableOpacity>
    </View>
  )
}
