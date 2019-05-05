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

    this._interval = setInterval(() => {
      this.fetchAllOrders()
    }, 1000);
    this.setState({ ...this.state, renderDrinks: true })
  }

  componentWillUnmount = async () => {
    clearInterval(this._interval)
  }

  completeOrder = async (itemId) =>{
    fetch(`${this.props.backendPath}/orders/${itemId}`,{method: 'delete'})
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
          </LinearGradient>
        </View>


        <View>
   
            {this.state.renderDrinks &&
              <ScrollView>
                <FlatList
                  data={this.state.orders}
                  renderItem={({ item , index} ) =>

                    <TouchableOpacity style={{...styles.drinkOrder, backgroundColor: `${item.color}`}} key={index} onPress={(e)=>this.completeOrder(item.id)}>
                      {
                        item.drink_order.order.map((el, index) => (
                            <View key={index} >
                              <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                                <Text style={{...styles.barViewOrderText, fontWeight: 'bold'}}>{`${el.drink} ${el.option}`}</Text>
                                <Text style={styles.barViewQuantityText}>{el.quantity}</Text>
                              </View>
                              <Text style={{...styles.barViewOrderText, fontSize: 20}}>{`>> For ${el.name} <<`}</Text>
                            </View>
                            )
                        )
                      }
                    </TouchableOpacity>
                  }
                />

              </ScrollView>
            }
            <Button title="Home" onPress={() => this.props.goHome()} />
      
        </View>

      </View>
    )
  }
}


export default ActiveOrder
