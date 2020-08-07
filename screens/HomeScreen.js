import * as React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Movie from '../components/Movie.js'
import NavButtons from '../components/NavButtons.js'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.movieBox}>
        <Movie id={7}/>
        <Movie id={8}/>
        <Movie id={9}/>
        <Movie id={3}/>
      </View>
      <NavButtons stack={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },

  movieBox: {
    width: '100%',
    height: '100%',
    margin: 15,
    flexWrap: 'wrap',
  },
})
