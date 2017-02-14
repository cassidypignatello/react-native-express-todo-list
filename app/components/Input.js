import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  input: {
    height: 50
  }
})

export default class Input extends Component {

  state = {
    text: ''
  }

  onChangeText = (text) => this.setState({text})

  render() {
    const {text} = this.state
    const {placeholder} = this.props
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={this.onChangeText}
          placeholder={placeholder}
        />
      </View>
    );
  }
}
