import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  checkbox: {
    padding: 10,
    borderWidth: 2
  }
})

export default class Checkbox extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.checkbox}/>
    );
  }
}
