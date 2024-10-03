import { useState } from "react"
import { Pressable, PressableProps } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import { styles } from "./styles"
import { colors } from "../../constants/colors"

export function Checkbox({ isCompleted = false }) {
  const [checked, setChecked] = useState(isCompleted)
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}
    >
      {checked && (
        <Ionicons name="checkmark" size={18} color={colors.gray[100]} />
      )}
    </Pressable>
  )
}
