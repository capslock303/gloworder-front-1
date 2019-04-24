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
