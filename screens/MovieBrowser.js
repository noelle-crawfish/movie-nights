import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

class MovieList extends React.Component {
  render() {
    return (
      <Text>TODO: Movie Browser</Text>
    )
  }
}



export default class MovieBrowser extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="browse" component={MovieList} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
