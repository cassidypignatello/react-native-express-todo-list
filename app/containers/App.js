import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Input from '../components/Input'
import List from '../components/List'
import { actionCreators } from '../redux/todoRedux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  onAddItem = (text) => {
    const {dispatch} = this.props
    dispatch(actionCreators.add(text))
  }

  render() {
    const {items} = this.props

    return (
      <View style={styles.container}>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddItem}
          />
        <List
          list={items}
        />
        <ScrollView/>
        <Footer>Remove completed items</Footer>
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
