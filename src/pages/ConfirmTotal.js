// Resources
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

// Components

class Order extends Component {

  state = {
    quantity: 1,
    name: "",
    orderStatus: null,
    total: null
  }

  componentDidMount = () => {
    this.findTotal()
  }

  add = () => {
    let count = this.state.quantity
    count++
    this.setState({ ...this.state, quantity: count}, () => this.findTotal())
  }

  subtract = () => {
    if (count >= 2) {
      // this.setState({ ...this.state, quantity: count-- })
    }
    else {
      alert('Order cannot be less than 1')
    }
  }

  findTotal = () => {
    const drinkPrice = this.props.selectedDrink.price
    const optionPrice = this.props.selectedOption.price
    const drinkQuantity = this.state.quantity
    const total = ((drinkPrice + optionPrice) * drinkQuantity)
    this.setState({...this.state, total})
  }

  order = () => {
    const newOrder = {
      drinkId: this.props.selectedDrink.id,
      quantity: this.state.quantity,
      optionId: this.props.selectedOption.id,
      barId: this.props.selectedBar.id,
      name: this.state.name,
      drink: this.props.selectedDrink.liquor,
      option: this.props.selectedOption.option
    }
    count = 1
    this.props.compileOrders(newOrder)
    this.setState({
      ...this.state,
      orderStatus: 'confirmed'
    })
  }


  render() {
    return (
      <View>
        <View>
          <LinearGradient colors={['#ff7f04', '#f5ebbe']}>
            <Text style={styles.header2}>confirm</Text>
          </LinearGradient>
        </View>
        <SafeAreaView>
          {
            !this.state.orderStatus ?
              <View>
                <View>
                  <Text style={styles.headers3}>{this.props.selectedDrink.liquor} {this.props.selectedOption.option.toLowerCase()}</Text>
                  <Text style={styles.headers3}></Text>
                </View>
                <View>
                  <Button title="+" onPress={() => this.add()} />
                  <Text>{this.state.quantity}</Text>
                  <Button title="-" onPress={() => this.subtract()} />
                </View>

                <View>
                  <Text>Name for Drink (optional)</Text>
                  <TextInput
                    id="orderName"
                    placeholder="Darth Vader..."
                    style={styles.loginField}
                    onChangeText={(text) => this.setState({ ...this.state, name: text })}
                  />
                </View>

                <View>
                  {this.props.selectedDrink && <Text>Drink Price: ${this.props.selectedDrink.price.toFixed(2)}</Text>}
                  {this.props.selectedOption && <Text>Drink Price: ${this.props.selectedOption.price.toFixed(2)}</Text>}
                  {this.state.total && <Text>Total: ${this.state.total.toFixed(2)}</Text>}
                </View>


                <View>
                  <Button title="Remove" onPress={() => this.remove()} />
                  <Button title="Order" onPress={() => this.order()} />
                </View>
              </View>
              :
              <View>
                <Text style={styles.headers3}>{this.state.quantity} {this.props.selectedDrink.liquor.toLowerCase()} {this.props.selectedOption.option.toLowerCase()} coming up!</Text>
                <Button title="Add Drinks to Order" onPress={() => this.props.addDrinksToOrder()} />
                <Button title="Go to Order Screen" onPress={() => this.props.goToOrderScreen()} />
              </View>
          }
        </SafeAreaView>
      </View>
    )
  }
}

export default Order
