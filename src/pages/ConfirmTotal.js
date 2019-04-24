// Resources
import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
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
    barId: null,
    barName: null,
    barAddress: null,
    drinkId: null,
    drinkLiquor: null,
    drinkPrice: null,
    optionId: null,
    optionName: null,
    optionPrice: null
  }

  componentDidMount() {
    this.compileState()
    console.log(this.state)
  }

  compileState = () => {
    this.setState({
      ...this.state,
      barId: this.props.selectedBar.id,
      barName: this.props.selectedBar.name,
      barAddress: this.props.selectedBar.address,
      drinkId: this.props.selectedDrink.id,
      drinkLiquor: this.props.selectedDrink.liquor,
      drinkPrice: this.props.selectedDrink.price,
      optionId: this.props.selectedOption.id,
      optionName: this.props.selectedOption.option,
      optionPrice: this.props.selectedOption.price
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
          <View>
            <Text style={styles.headers3}>{this.props.selectedDrink.liquor}</Text>
            <Text style={styles.headers3}></Text>
          </View>
          <ScrollView>
            <FlatList
              data={this.props.options}
              keyExtractor={(item, index) => item.key}
              renderItem={({ item }) =>
                <TouchableOpacity style={styles.listItem} onPress={() => this.props.selectOption(item.id)}>
                  <View >
                    <Text style={styles.listItemText}>{item.option}</Text>
                    <Text style={styles.listItemSubText}>{item.price > 0 ? item.price.toFixed(2) : 'No Charge'}</Text>
                  </View>
                </TouchableOpacity>

              }
            />
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  }
}

export default Order
