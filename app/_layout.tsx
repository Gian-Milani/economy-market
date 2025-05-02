import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts,
} from '@expo-google-fonts/poppins'
import { ThemeProvider } from 'styled-components/native'
import theme from '../src/theme'

import { Loading } from '@/src/components/Loading'

import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? (
        <Stack screenOptions={{ headerShown: false }} />
      ) : (
        <Loading />
      )}
    </ThemeProvider>
  )
}
