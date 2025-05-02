import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AuthStack from './src/navigation/AuthStack'

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}
