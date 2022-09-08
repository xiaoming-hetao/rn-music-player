import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { routes, RoutesConfig, RouteType } from '../../routes'

const Tab = createBottomTabNavigator()

const bottomTabRoutes = routes.filter(
  (item: RoutesConfig) => item.type === RouteType.bottomTabNavigator,
)

const Home = () => {
  return (
    <Tab.Navigator>
      {bottomTabRoutes.map((item: RoutesConfig) => (
        <Tab.Screen
          name={item.name}
          component={item.component}
          options={item.tabScreenOptions}
        />
      ))}
    </Tab.Navigator>
  )
}

export default Home
