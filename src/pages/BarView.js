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

  componentDidMount = () => {
    this.fetchAllOrders()
    this.fetchBars()
    this.fetchDrinks()
    this.fetchOptions()
  }

  // Log out state, the drink order is being passed as a string. Can't get JSON.parse() or .json() to resolve.
  // Need to iterate over drinks/options and find matching drinks/ options to populate

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
    this.setState({ ...this.state, options }, () => console.log(this.state))
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
            {this.state.orders &&
              <ScrollView>
                <Text>ID --- Drink --- Quantity</Text>
                <FlatList
                  data={this.state.orders}
                  keyExtractor={(item, index) => item.id}
                  renderItem={({ item }) =>
                    <View style={{ backgroundColor: `${item.color}`, height: 50 }}>
                      <Text style={styles.listItemText}>
                        {item.id} {item.drink_order[0]} {item.drink_order[1]}
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