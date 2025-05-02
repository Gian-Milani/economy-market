import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Login } from '../screens/Login'
import { Register } from '../screens/Register'
import TabNavigator from './TabNavigator'

const Stack = createNativeStackNavigator()

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='MainApp' component={TabNavigator} />
    </Stack.Navigator>
  )
}
