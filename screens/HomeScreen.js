import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import Movie from '../components/Movie.js'
import NavButtons from '../components/NavButtons.js'

export default class HomeScreen extends React.Component {
  render() { 
  return (
    <View style={styles.container}>
      <Movie />
      <NavButtons />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
})
