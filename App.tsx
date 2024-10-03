import React from "react"
import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter"
import { useFonts } from "expo-font"
import { StatusBar } from "expo-status-bar"

import { Home } from "./src/screens/Home"
import { Text } from "react-native"

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  })

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>
  }

  return (
    <>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Home />
    </>
  )
}
