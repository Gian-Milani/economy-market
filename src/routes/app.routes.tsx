// import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import { Home } from '../screens/Home'
// import { NewPurchase } from '../screens/NewPurchase'
// import { Products } from '../screens/Products'

// const { Navigator, Screen } = createNativeStackNavigator()

// export function AppRoutes() {
//   return (
//     <Navigator screenOptions={{ headerShown: false }}>
//       <Screen name='home' component={Home} />

//       <Screen name='new' component={NewPurchase} />

//       <Screen name='products' component={Products} />
//     </Navigator>
//   )
// }

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { Profile } from '../screens/Profile'

const Tab = createBottomTabNavigator()

export default function AppRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}
