import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#DDDDDD',
    height: 60,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    paddingTop: 20
  }
})

export default class Footer extends Component {
  render() {
    const {children} = this.props
    return (
      <TouchableOpacity style={styles.footer}>
        <Text style={styles.instructions}>{children}</Text>
      </TouchableOpacity>
    );
  }
}
