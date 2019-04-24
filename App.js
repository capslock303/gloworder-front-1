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
import ConfirmTotal from './src/pages/ConfirmTotal'
import Home from './src/pages/Home'
import Menu from './src/pages/Menu'
import Order from './src/pages/Order'


const backendPath = 'http://localhost:3000'

class App extends Component {

  state = {
    bars: [],
    drinks: [],
    loggedIn: false,
    options: [],
    path: backendPath,
    selectedBar: { id: 1, name: "The Attic", address: "949 Walnut St, Boulder, CO 80302" },
    selectedDrink: {},
    selectedOption: {},
    showScreen: 'Menu',
    user: {
      name: null,
      phone: null
    },
    validCredentials: false
  }

  componentDidMount() {
    this.fetchBars()
    // check session storage, if user is logged in
    // set state showScreen to 'Home
  }

  fetchBars = async () => {
    const response = await fetch(`${backendPath}/restaurants`)
    const bars = await response.json()
    this.setState({ ...this.state, bars })
  }

  fetchDrinks = async () => {
    const response = await fetch(`${backendPath}/drinks`)
    const drinks = await response.json()
    this.setState({ ...this.state, drinks })
  }

  fetchOptions = async () => {
    const response = await fetch(`${backendPath}/options`)
    const options = await response.json()
    this.setState({ ...this.state, options })
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

  selectDrink = (drinkId) => {
    const drink = this.state.drinks.find(drink => drink.id === drinkId)
    this.setState({
      ...this.state,
      selectedDrink: drink,
      showScreen: 'Order'
    })
  }

  selectOption = (optionId) => {
    const option = this.state.options.find(option => option.id === optionId)
    this.setState({
      ...this.state,
      selectedOption: option,
      showScreen: 'ConfirmTotal'
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
            drinks={this.state.drinks}
            fetchDrinks={this.fetchDrinks}
            path={this.state.path}
            selectedBar={this.state.selectedBar}
            selectDrink={this.selectDrink}
          />
        break;
      case 'Order':
        componentToShow =
          <Order
            fetchOptions={this.fetchOptions}
            options={this.state.options}
            path={this.state.path}
            selectOption={this.selectOption}
            selectedBar={this.state.selectedBar}
            selectedDrink={this.state.selectedDrink}
          />
        break;
      case 'ConfirmTotal':
        componentToShow =
          <ConfirmTotal
            fetchOptions={this.fetchOptions}
            options={this.state.options}
            path={this.state.path}
            selectOption={this.selectOption}
            selectedBar={this.state.selectedBar}
            selectedDrink={this.state.selectedDrink}
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
