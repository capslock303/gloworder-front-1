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

class Menu extends Component {

  state = {

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
                {/* <FlatList
                  data={this.props.bars}
                  keyExtractor={(item, index) => item.key}
                  renderItem={({ item }) =>
                    <TouchableOpacity style={styles.listItem} onPress={() => this.props.selectBar(item.id)}>
                      <View >
                        <Text style={styles.listItemText}>{item.name}</Text>
                        <Text style={styles.listItemSubText}>{item.location}</Text>
                      </View>
                    </TouchableOpacity>

                  }
                /> */}
              </ScrollView>
            </SafeAreaView >
          </View>
        }
      </View>
    )
  }
}

export default Menu
