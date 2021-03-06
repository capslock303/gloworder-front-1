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
// import SignUp from './src/pages/SignUp'
// import SignUp2 from './src/pages/SignUp2'
import ConfirmTotal from './src/pages/ConfirmTotal'
import Home from './src/pages/Home'
import Menu from './src/pages/Menu'
import Order from './src/pages/Order'
import ActiveOrder from './src/pages/ActiveOrder'
import BarView from './src/pages/BarView'


const backendPath = 'https://gloworder-backend.herokuapp.com'

class App extends Component {

  state = {
    bars: [],
    barViewOrders: [],
    currentOrder: [],
    color: "",
    drinks: [],
    loading: false,
    loggedIn: false,
    options: [],
    selectedBar: {},
    selectedDrink: {},
    selectedOption: {},
    showScreen: 'Login',
    user: {
      name: null,
      phone: null
    },
    validCredentials: false
  }

  componentDidMount() {
    this.fetchBars()
    this.fetchColor()
    // check session storage, if user is logged in
    // set state showScreen to 'Home
  }

  clearOrder = ()=>{
    this.setState({currentOrder: []})
  }

  fetchBars = async () => {
    const response = await fetch(`${backendPath}/restaurants`)
    const bars = await response.json()
    this.setState({ ...this.state, bars })
  }

  fetchColor = async () => {
    const colors = ["blue","red", "green", "purple","gold"]
    const response = await fetch(`${backendPath}/orders`)
    let orders = await response.json()
    orders = orders.filter(order=> order.paid == false)
    orders = orders.sort((a,b)=> Number(a.id) > Number(b.id) ? -1 :0)
    const index = colors.indexOf(orders[0].color)
    let orderColor = colors[index+1] || 'blue'
    this.setState({color:orderColor})
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

  compileOrders = (newOrder) => {
    const orders = this.state.currentOrder
    orders.push(newOrder)
    this.setState({ ...this.state, currentOrder: orders })
  }

  addDrinksToOrder = () => {
    this.setState({
      ...this.state,
      selectedDrink: {},
      selectedOption: {},
      showScreen: 'Menu'
    })
  }

  goToOrderScreen = () => {
    this.setState({
      ...this.state,
      showScreen: 'ActiveOrder'
    })
  }

  goHome = () => {
    this.setState({
      ...this.state,
      showScreen: 'Home'
    })
  }

  goMenu = () => {
    this.setState({
      ...this.state,
      showScreen: 'Menu'
    })
  }


  cancel = () => {
    this.setState({
      ...this.state,
      showScreen: 'Menu'
    })
  }

  barView = () => {
    this.setState({
      ...this.state,
      showScreen: 'BarView'
    })
  }

  postOrder = async () => {
    this.setState({...this.state, loading: true})
    const order = {
      drinkOrder: { order: this.state.currentOrder},
      color: this.state.color,
      total: 8,
      paid: false,
      userId: 5
    }
    const response = await fetch(`${backendPath}/orders`, {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.status !== 200) {
      alert('Something went wrong! Please try again')
      this.setState({
        ...this.state,
        showScreen: 'ConfirmTotal',
        loading: false
      })
    }
    else{
      this.setState({...this.state, loading: false})
      this.goToOrderScreen()
    }
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
      case 'Home':
        componentToShow =
          <Home
            clearOrder={this.clearOrder}
            fetchColor={this.fetchColor}
            bars={this.state.bars}
            barView={this.barView}
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
            selectedBar={this.state.selectedBar}
            selectDrink={this.selectDrink}
          />
        break;
      case 'Order':
        componentToShow =
          <Order
            fetchOptions={this.fetchOptions}
            options={this.state.options}
            selectOption={this.selectOption}
            selectedBar={this.state.selectedBar}
            selectedDrink={this.state.selectedDrink}
          />
        break;
      case 'ConfirmTotal':
        componentToShow =
          <ConfirmTotal
            addDrinksToOrder={this.addDrinksToOrder}
            cancel={this.cancel}
            compileOrders={this.compileOrders}
            loading={this.state.loading}
            postOrder={this.postOrder}
            selectedOption={this.state.selectedOption}
            selectedBar={this.state.selectedBar}
            selectedDrink={this.state.selectedDrink}
            goHome={this.goHome}
            
          />
        break;
      case 'ActiveOrder':
        componentToShow =
          <ActiveOrder
            
            bars={this.state.bars}
            currentOrder={this.state.currentOrder}
            color={this.state.color}
            goHome={this.goHome}
            goMenu={this.goMenu}
          />
        break;
      case 'BarView':
        componentToShow =
          <BarView
            backendPath={backendPath}
            currentOrder={this.state.currentOrder}
            fetchAllOrders={this.fetchAllOrders}
            goHome={this.goHome}
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
