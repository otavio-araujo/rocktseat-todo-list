import { useState } from "react"
import { Ionicons } from "@expo/vector-icons"
import EvilIcons from "@expo/vector-icons/EvilIcons"
import { View, Text, TouchableOpacity, Pressable } from "react-native"

import { styles } from "./styles"
import { colors } from "../../constants/colors"

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
  const [checked, setChecked] = useState(isCompleted)
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={() => {
          setChecked(!checked)
          onCompleted(id)
        }}
      >
        {checked && (
          <Ionicons name="checkmark" size={18} color={colors.gray[100]} />
        )}
      </Pressable>

      <Text style={checked ? styles.taskTextCompleted : styles.taskText}>
        {task}
      </Text>
      <TouchableOpacity style={styles.trashButton} onPress={() => onRemove(id)}>
        <EvilIcons name="trash" size={24} color={colors.gray[300]} />
      </TouchableOpacity>
    </View>
  )
}
