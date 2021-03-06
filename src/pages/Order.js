// Resources
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  Dimensions,
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

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
const IconCustom = createIconSetFromFontello(fontelloConfig);


// Components

class Order extends Component {

  componentDidMount() {
    this.props.fetchOptions()
  }


  render() {
    let ScreenHeight = Dimensions.get("window").height;
    let ScreenWidth = Dimensions.get("window").width;

    return (
      <View>
        {
          this.props.selectedDrink &&
          <View>
            <LinearGradient colors={['#ff8c00', '#ffa500']} style={styles.linearGradient}>
            <View>
            
                <Text style={styles.header2}>options</Text>
              
            </View>
            <SafeAreaView>
              <View>
                <Text style={styles.headers3}>{this.props.selectedBar.name.toLowerCase()}</Text>
                <Text style={styles.paragraph}>{this.props.selectedBar.address.toLowerCase()}</Text>
              </View>
              <ScrollView>
                <FlatList
                  data={this.props.options}
                  keyExtractor={(item, index) => item.option}
                  style={styles.gridlist}
                  numColumns={2}
                  renderItem={({ item }) =>
                    <TouchableOpacity style={{...styles.gridItem, height:ScreenHeight/5, width: (ScreenWidth/2)-15}} onPress={() => this.props.selectOption(item.id)}>
                      <IconCustom name={item.option.toLowerCase().split(" ").join("")} style={{ fontSize: 30, color: 'white' }} />
                      <Text style={styles.listItemText}>{item.option.toLowerCase()}</Text>
                      <Text style={styles.listItemSubText}>{item.price > 0 ? item.price.toFixed(2) : 'No Charge'}</Text>
                    </TouchableOpacity>
                  }
                />
              </ScrollView>
            </SafeAreaView >
            </LinearGradient>
          </View>
        }
      </View>
    )
  }
}

export default Order
