import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavButtons from './components/NavButtons.js'
import Movie from './components/Movie.js'

class HomeScreen extends React.Component {
  render() { 
  return (
    <View>
      <Text>Home Screen</Text>
      <NavButtons />
      <Movie />
    </View>
  );
  }
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Watch Next" component={HomeScreen} />
        {/* <Stack.Screen name="Browse" component={MovieBrowser} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
