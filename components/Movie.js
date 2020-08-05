import * as React from 'react'
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class NavButtons extends React.Component {
  constructor(props) {
    super(props)
    this.id = 7
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.movie}
      >
        <Image source={require('./examplemovie.jpg')} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 200,
    backgroundColor: '#58111a',
  },
})

