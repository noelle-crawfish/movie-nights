import * as React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

export default class NavButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  render() {
    if(this.state.open) {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({open: false})}
          >
            <Text>Close</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
          >
            <Text>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
          >
            <Text>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {this.props.stack.navigate('Browse')}}
          >
            <Text>Browse</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({open: true})}
          >
            <Text>Open</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'flex-end',
    flexDirection: 'column-reverse',
  },

  button: {
    width: 50,
    height: 50,
    backgroundColor: '#58111a',
    borderRadius: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

