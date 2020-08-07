import * as React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

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
            <Ionicons
              name={'md-close'}
              size={25}
              color={'#000'}
            />

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
          >
            <Ionicons
              name={'md-settings'}
              size={25}
              color={'#000'}
            />

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
          >
            <Ionicons
              name={'md-search'}
              size={25}
              color={'#000'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {this.props.stack.navigate('Browse')}}
          >
            <Ionicons
              name={'md-apps'}
              size={25}
              color={'#000'}
            />
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
            <Ionicons
              name={'md-menu'}
              size={25}
              color={'#000'}
            />
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
    width: 55,
    height: 55,
    backgroundColor: '#ffbf00',
    borderRadius: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

