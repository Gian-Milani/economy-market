import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts,
} from '@expo-google-fonts/poppins'
import { ThemeProvider } from 'styled-components/native'
import theme from '../src/theme'

import { Loading } from '@/src/components/Loading'

import { Home } from '@/src/screens/Home'
import { Login } from '@/src/screens/Login'
import { Profile } from '@/src/screens/Profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'

const StackNav = createNativeStackNavigator()
const TabNav = createBottomTabNavigator()

function TabRoutes() {
  return (
    <TabNav.Navigator>
      <TabNav.Screen name='Home' component={Home} />
      <TabNav.Screen name='Profile' component={Profile} />
    </TabNav.Navigator>
  )
}

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
        <Stack>
          <Stack.Screen name='index' options={{ headerShown: false }} />
        </Stack>
      ) : (
        <Loading />
      )}
    </ThemeProvider>
  )
}
