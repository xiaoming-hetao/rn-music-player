import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import Home from '../pages/Home'
import Welcome from '../pages/Welcome'
import Discovery from '../pages/Discovery'
import Mine from '../pages/Mine'

export enum RouteType {
  stackNavigator = 'stackNavigator',
  bottomTabNavigator = 'bottomTabNavigator',
}

export interface RoutesConfig {
  type: RouteType
  name: string
  component: (params: any) => JSX.Element
  stackScreenOptions?: NativeStackNavigationOptions
  tabScreenOptions?: BottomTabNavigationOptions
}

export const routes: RoutesConfig[] = [
  {
    type: RouteType.stackNavigator,
    name: 'WelCome',
    component: Welcome,
    stackScreenOptions: {
      headerShown: false,
    },
  },
  {
    type: RouteType.stackNavigator,
    name: 'Home',
    component: Home,
    stackScreenOptions: {
      headerBackVisible: false,
      headerShown: false,
    },
  },
  {
    type: RouteType.bottomTabNavigator,
    name: '发现',
    component: Discovery,
    tabScreenOptions: {
      headerShown: false,
    },
  },
  {
    type: RouteType.bottomTabNavigator,
    name: '我的',
    component: Mine,
    tabScreenOptions: {
      headerShown: false,
    },
  },
]
