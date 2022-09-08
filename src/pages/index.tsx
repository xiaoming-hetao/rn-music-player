/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { routes, RoutesConfig, RouteType } from '../../src/routes'

const Stack = createNativeStackNavigator()

const stackRoutes = routes.filter(
  (item: RoutesConfig) => item.type === RouteType.stackNavigator,
)

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {stackRoutes.map((item: RoutesConfig) => (
          <Stack.Screen
            name={item.name}
            component={item.component}
            options={item.stackScreenOptions}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
