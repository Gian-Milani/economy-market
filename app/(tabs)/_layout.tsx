import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

import theme from '../../src/theme/index'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.COLORS.GREEN_500,
        tabBarStyle: {
          backgroundColor: theme.COLORS.GRAY_400,
        },
      }}
    >
      <Tabs.Screen
        name='home/index'
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile/index'
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
