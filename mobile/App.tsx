import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-950">
      <Text className="text-zinc-50 font-bold text-6xl">Hello, World!</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
