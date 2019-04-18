// Resources
import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button
} from 'react-native'

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator
} from 'react-navigation'

import Icon from 'react-native-vector-icons/FontAwesome'

// Components
import Login from './src/pages/Login'
import SignUp from './src/pages/SignUp'
import SignUp2 from './src/pages/SignUp2'
import NewUser from './src/pages/NewUser'
import Home from './src/pages/Home'

const backendPath = 'http://localhost:3000'

class App extends Component {

  state = {
    bars: [],
    loggedIn: false,
    selectedBar: null,
    showScreen: 'Home',
    user: {
      name: null,
      phone: null
    },
    validCredentials: false
  }

  componentDidMount() {
    this.fetchRestaurants()
    // check session storage, if user is logged in
    // set state showScreen to 'Home
  }

  fetchRestaurants = async () => {
    const json = await fetch(`${backendPath}/restaurants`)
    const response = await json.json()
    this.setState({...this.state, bars: response})
  }

  setUserInfo = (fieldId, value) => {
    let userInfo = this.state.user
    userInfo.fieldId = value
    this.setState({ user: userInfo });
  }

  moveScreen = (screen) => {
    this.setState({ ...this.state, showScreen: screen })
  }

  login = () => {
    this.state.validCredentials ?
      this.setState({
        ...this.state,
        lastScreen: 'Login',
        loggedIn: true
      })
      :
      alert('Invalid Login')
  }

  selectBar = (barId) => {
    alert(barId)
  }

  render() {

    let componentToShow

    switch (this.state.showScreen) {
      case 'Login':
        componentToShow =
          <Login
            moveScreen={this.moveScreen}
          />
        break;
      case 'SignUp':
        componentToShow =
          <SignUp
            moveScreen={this.moveScreen}
          />
        break;
      case 'SignUp2':
        componentToShow =
          <SignUp2
            moveScreen={this.moveScreen}
          />
        break;
      case 'Home':
        componentToShow =
          <Home
            bars={this.state.bars}
            fetchRestaurants={this.fetchRestaurants}
            moveScreen={this.moveScreen}
            selectBar={this.selectBar}
          />
        break;
    }


    return (
      <View>
        {componentToShow}
      </View>
    )
  }
}

export default App


