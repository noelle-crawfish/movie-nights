import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen.js'
/* import MovieBrowser from './screens/MovieBrowser.js' */

const Stack = createStackNavigator();

function MovieBrowser() {
  return (
    <Text>Hello</Text>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Watch Next" component={HomeScreen} 
          options={{
            headerStyle: {
              backgroundColor: '#dc112c',
            },
          }}
        />
        <Stack.Screen name="Browse" component={MovieBrowser} />
      {/* <Stack.Screen name="Search" component={MovieSearcher} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
})

export default App;
