import * as React from 'react'
import { Alert, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class NavButtons extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity
        onPress = {() => {Alert.alert("My id is " + this.props.id)}}
      >
        <Image source={require('./examplemovie.jpg')} style={styles.movie} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  movie: {
    aspectRatio: 150/220,
    /* height: 155, */
    margin: '5%',
  },
})

