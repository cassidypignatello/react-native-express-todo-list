import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 2
  },
  removeButton: {
    color: 'red'
  },
  editItems: {
    // borderWidth: 1,
    width: 50,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default class List extends Component {

  renderItem = (text, index) => {
    const {onPressItem} = this.props
    return (
      <TouchableOpacity
        style={styles.item}
        key={index}
      >
        <Text>{text}</Text>
        <View style={styles.editItems}>
          <Checkbox/>
          <TouchableOpacity
            onPress={() => onPressItem(index)}
          >
            <Text style={styles.removeButton}>X</Text>
          </TouchableOpacity>
        </View>
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
