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
import Icon from 'react-native-vector-icons/FontAwesome'


// Components

class Order extends Component {

  componentDidMount() {
    this.props.fetchOptions()
  }


  render() {
    return (
      <View>
        {
          this.props.selectedDrink &&
          <View>
            <View>
              <LinearGradient colors={['#ff7f04', '#f5ebbe']}>
                <Text style={styles.header2}>menu</Text>
              </LinearGradient>
            </View>
            <SafeAreaView>
              <View>
                <Text style={styles.headers3}>{this.props.selectedBar.name}</Text>
                <Text style={styles.paragraph}>{this.props.selectedBar.location}</Text>
              </View>
              <ScrollView>
                <FlatList
                  data={this.props.options}
                  keyExtractor={(item, index) => item.option}
                  style={styles.gridlist}
                  numColumns={2}
                  renderItem={({ item }) =>
                    <TouchableOpacity style={{ ...styles.gridItem, width: '70%' }} onPress={() => this.props.selectOption(item.id)}>
                      <Icon name='plus' style={{ fontSize: 30, color: 'orange' }} />
                      <Text style={styles.listItemText}>{item.option}</Text>
                      <Text style={styles.listItemSubText}>{item.price > 0 ? item.price.toFixed(2) : 'No Charge'}</Text>
                    </TouchableOpacity>
                  }
                />
              </ScrollView>
            </SafeAreaView >
          </View>
        }
      </View>
    )
  }
}

export default Order
