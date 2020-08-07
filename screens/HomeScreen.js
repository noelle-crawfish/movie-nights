import * as React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Movie from '../components/Movie.js'
import NavButtons from '../components/NavButtons.js'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Movie />
      <Button title="hi" onPress={() => { navigation.navigate('Browse')}}/>
      <NavButtons stack={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
})
