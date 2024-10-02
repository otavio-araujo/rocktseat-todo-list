import { useState } from "react"
import { Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import { styles } from "./styles"
import { colors } from "../../constants/colors"

export function Checkbox() {
  const [checked, setChecked] = useState(false)
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}
    >
      {checked && (
        <Ionicons name="checkmark" size={16} color={colors.gray[100]} />
      )}
    </Pressable>
  )
}
