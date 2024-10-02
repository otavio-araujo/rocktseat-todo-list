import { Text, TouchableOpacity, View } from "react-native"
import EvilIcons from "@expo/vector-icons/EvilIcons"

import { styles } from "./styles"
import { colors } from "../../constants/colors"

type Props = {
  task: string
}

export function TaskItem({ task }: Props) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>{task}</Text>
      <TouchableOpacity style={styles.trashButton}>
        <EvilIcons name="trash" size={24} color={colors.gray[300]} />
      </TouchableOpacity>
    </View>
  )
}
