import * as React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class NavButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
      >
        <Text>Hello</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    backgroundColor: '#58111a',
    borderRadius: 100,
  },
})

