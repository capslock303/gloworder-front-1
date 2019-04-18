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

import Icon from 'react-native-vector-icons/FontAwesome'

// Components
import Login from './src/pages/Login'
import SignUp from './src/pages/SignUp'
import SignUp2 from './src/pages/SignUp2'
import NewUser from './src/pages/NewUser'
import Home from './src/pages/Home'
import Menu from './src/pages/Menu'


const backendPath = 'http://localhost:3000'

class App extends Component {

  state = {
    bars: [],
    loggedIn: false,
    selectedBar: {},
    showScreen: 'Login',
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
    const bar = this.state.bars.find(bar => bar.id === barId)
    this.setState({
      ...this.state,
      selectedBar: bar,
      showScreen: 'Menu'
    })
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
      case 'Menu':
        componentToShow =
          <Menu
            bars={this.state.bars}
            selectedBar={this.state.selectedBar}
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
