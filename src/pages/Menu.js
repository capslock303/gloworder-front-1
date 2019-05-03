// Resources
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
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

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
const IconCustom = createIconSetFromFontello(fontelloConfig);


// Components

class Menu extends Component {


  componentDidMount() {
    this.props.fetchDrinks()
  }

  render() {
    return (
      <View>
        {
          this.props.selectedBar &&
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
                  data={this.props.drinks}
                  keyExtractor={(item, index) => item.liquor}
                  style={styles.gridlist}
                  numColumns={2}
                  renderItem={({ item }) =>
                    <TouchableOpacity style={styles.gridItem} onPress={() => this.props.selectDrink(item.id)}>

                      <IconCustom name={item.liquor.toLowerCase()} style={{ fontSize: 40, color: 'orange', margin: 2 }} />
                      <Text style={styles.listItemText}> {item.liquor} </Text>
                      <Text style={styles.listItemSubText}>$ {item.price.toFixed(2)}</Text>

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

export default Menu
