import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15
  }
})

export default class List extends Component {
  renderItem = (text, index) => {
    return (
      <TouchableOpacity
        style={styles.item}
        key={index}
      >
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const {list} = this.props
    return (
      <View>
        <ScrollView>
          {list.map(this.renderItem)}
        </ScrollView>
      </View>
    );
  }
}
