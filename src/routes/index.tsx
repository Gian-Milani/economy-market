// import { NavigationContainer } from '@react-navigation/native'

// import { AppRoutes } from './app.routes'

// export function Routes() {
//   return (
//     <NavigationContainer>
//       <AppRoutes />
//     </NavigationContainer>
//   )
// }

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../screens/Login'
import AppRoutes from './app.routes' // Tabs

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Main' component={AppRoutes} />
    </Stack.Navigator>
  )
}
