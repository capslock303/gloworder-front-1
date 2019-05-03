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
    options: [],
    drinkOptions: [],
    fullOrders: [],
    renderDrinks: false
  }

  componentDidMount = async () => {
    await this.fetchDrinkOptions()
    await this.fetchAllOrders()
    await this.fetchDrinks()
    await this.fetchOptions()
    await this.fetchBars()
    this.intervalFetch = setInterval(()=> this.fetchAllOrders(), 15000)
    this.setState({ ...this.state, renderDrinks: true })
  }

  componentWillUnmount = async () => {
    this.intervalFetch = ""
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
    console.log('??', options)
    this.setState({ ...this.state, options })
  }

  fetchDrinkOptions = async () => {
    const response = await fetch(`${this.props.backendPath}/drink_options`)
    const drinkOptions = await response.json()
    this.setState({ ...this.state, drinkOptions })
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
            {this.state.renderDrinks &&
              <ScrollView>
                <FlatList
                  data={this.state.orders}
                  renderItem={({ item }) =>

                    <View style={{ backgroundColor: `${item.color}`, height: 75, flexDirection: 'column', justifyContent:'space-evenly' }}>
                      {
                        item.drink_order.map(el => {
                          let drinkOption = this.state.drinkOptions.find(dO => dO.id == el.drink_options_id)
                          let liquor = this.state.drinks.find(dr => dr.id == drinkOption.drink_id).liquor
                          let option = this.state.options.find(op => op.id == drinkOption.option_id).option || ''
                          let order = `${liquor} ${option}`
                          return (
                            <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                              <Text style={styles.barViewOrderText}>{order}</Text>
                              <Text style={styles.barViewQuantityText}>{el.quantity}</Text>
                            </View>)
                        }
                        )
                      }
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