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
import Geocode from "react-geocode"

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
    this.latLongToAddress(response)
    this.setState({ ...this.state, bars: response })
  }

  latLongToAddress = (obj) => {
    const addressSet = obj.map(item => {
      const parsedInfo = JSON.parse(item.location)
      const lat = parsedInfo[0].toString()
      const long = parsedInfo[1].toString()
      // Geocode.fromLatLng(lat, long).then(
      //   response => {
      //     const address = response.results[0].formatted_address;
      //     console.log(address);
      //   },
      //   error => {
      //     console.error(error);
      //   }
      // );
    })
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
