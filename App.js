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
import Validator from 'validator'

// Components
import Login from './src/pages/Login'
import SignUp from './src/pages/SignUp'
import SignUp2 from './src/pages/SignUp2'
import NewUser from './src/pages/NewUser'
import Home from './src/pages/Home'

class App extends Component {

  state = {
    loggedIn: false,
    showScreen: 'Login',
    lastScreen: null,
    user: {
      name: null,
      phone: null
    },
    validCredentials: false
  }

  componentDidMount() {
    // check session storage, if user is logged in
    // set state showScreen to 'Home
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
            moveScreen={this.moveScreen}
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


