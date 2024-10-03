import { View, Text, TouchableOpacity, Pressable } from "react-native"
import EvilIcons from "@expo/vector-icons/EvilIcons"

import { styles } from "./styles"
import { colors } from "../../constants/colors"
import { Checkbox } from "../Checkbox"

export type TaskItemProps = {
  id: string
  task: string
  isCompleted: boolean
  onRemove?: (id: string) => void
  onCompleted?: (id: string) => void
}

export function TaskItem({
  id,
  task,
  isCompleted,
  onRemove = () => {},
  onCompleted = () => {},
}: TaskItemProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => onCompleted(id)}>
        <Checkbox isCompleted={isCompleted} />
      </Pressable>
      <Text style={isCompleted ? styles.taskTextCompleted : styles.taskText}>
        {task}
      </Text>
      <TouchableOpacity style={styles.trashButton} onPress={() => onRemove(id)}>
        <EvilIcons name="trash" size={24} color={colors.gray[300]} />
      </TouchableOpacity>
    </View>
  )
}
