import React, { Component } from 'react'

import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native'

import styles from '../StyleGuide'
import LinearGradient from 'react-native-linear-gradient'

class ActiveOrder extends Component {

  state = {
    orders: [],
    bars: [],
    drinks: [],
    options: []
  }

  componentDidMount = async () => {
    await this.fetchAllOrders()
    await this.fetchDrinks()
    this.fetchBars()
    this.fetchOptions()
    this.findDrinkNames()
  }

  fetchAllOrders = async () => {
    const response = await fetch(`${this.props.backendPath}/orders`)
    const orders = await response.json()
    this.setState({ ...this.state, orders })
  }

  fetchBars = async () => {
    const response = await fetch(`${this.props.backendPath}/restaurants`)
    const bars = await response.json()
    this.setState({ ...this.state, bars })
  }

  fetchDrinks = async () => {
    const response = await fetch(`${this.props.backendPath}/drinks`)
    const drinks = await response.json()
    this.setState({ ...this.state, drinks })
  }

  fetchOptions = async () => {
    const response = await fetch(`${this.props.backendPath}/options`)
    const options = await response.json()
    this.setState({ ...this.state, options })
  }

  findDrinkNames = () => {
    const orderIds = this.state.orders.map(item => item.drink_order.map(element => element.drink_options_id))
    const drinkIds = this.state.drinks.map(item => item.id)

    const result = this.state.drinks.find(item => item.id === orderIds[0][0])

    // console.log(drinkIds)
    // console.log(orderIds)
    console.log(result)
  }


  render() {
    return (
      <View>

        <View>
          <LinearGradient colors={['#ff7f04', '#f5ebbe']}>
            <Text style={styles.header2}>bar view</Text>
            <Button title="Home" onPress={() => this.props.goHome()} />
          </LinearGradient>
        </View>


        <View>
          <SafeAreaView>
            {this.state.orders && this.state.drinks.length > 0 &&
              <ScrollView>
                <Text>ID --- Drink --- Quantity</Text>
                <FlatList
                  data={this.state.orders}
                  renderItem={({ item }) =>

                    <View style={{ backgroundColor: `${item.color}`, height: 50 }}>
                      <Text>
                        {/* {this.state.drinks} */}
                      </Text>
                    </View>
                  }
                />

              </ScrollView>
            }
          </SafeAreaView>
        </View>

      </View>
    )
  }
}


export default ActiveOrder