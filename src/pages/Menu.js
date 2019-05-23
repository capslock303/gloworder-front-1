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

class Menu extends Component {


  componentDidMount() {
    this.props.fetchDrinks()
  }

  render() {
    let ScreenHeight = Dimensions.get("window").height;

    return (
      <View >
        <LinearGradient colors={['#ff8c00', '#ffa500']} style={{height: ScreenHeight}}>
        {
          this.props.selectedBar &&
          <View>
            
            <View>
              
                <Text style={styles.header2}>menu</Text>
              
            </View>
            <SafeAreaView>
              <View>
                <Text style={styles.headers3}>{this.props.selectedBar.name.toLowerCase()}</Text>
                <Text style={styles.paragraph}>{this.props.selectedBar.address.toLowerCase()}</Text>
              </View>
              <ScrollView>
                <FlatList
                  data={this.props.drinks}
                  keyExtractor={(item, index) => item.liquor}
                  style={styles.gridlist}
                  numColumns={2}
                  renderItem={({ item }) =>
                    <TouchableOpacity style={{...styles.gridItem, height:ScreenHeight/5}} onPress={() => this.props.selectDrink(item.id)}>

                      <IconCustom name={item.liquor.toLowerCase()} style={{ fontSize: 40, color: 'white', margin: 2 }} />
                      <Text style={styles.listItemText}> {item.liquor.toLowerCase()} </Text>
                      <Text style={styles.listItemSubText}>$ {item.price.toFixed(2)}</Text>

                    </TouchableOpacity>

                  }

                />
              </ScrollView>
            </SafeAreaView >
            
          </View>
        }
        </LinearGradient>
      </View>
    )
  }
}

export default Menu
