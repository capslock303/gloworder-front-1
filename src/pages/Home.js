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


// Components

let key = 0

class Home extends Component {

  state = {

  }

  render() {
    return (
      <View>
        <View>
          <LinearGradient colors={['#ff7f04', '#f5ebbe']}>
            <Text style={styles.header2}>gloworder</Text>
          </LinearGradient>
        </View>
        <SafeAreaView>
          <View>
            <Text style={styles.headers3}>Bars Near Me</Text>
          </View>
          <ScrollView>
            <FlatList
              data={this.props.bars}
              keyExtractor={(item, index) => item.key}
              renderItem={({ item }) =>
                <TouchableOpacity
                  style={styles.listItem}
                  onPress={() => this.props.selectBar(item.id)}
                  key={key++}
                >
                  <View>
                    
                    <View style={{flexDirection:'row'}}> 
                      <Icon name='beer' style={styles.formIcon} />
                      <Text style={styles.listItemText}>{item.name}</Text>
                    </View>

                    <Text style={styles.listItemSubText}>{item.address}</Text>
                    
                  </View>
                </TouchableOpacity>

              }
            />
          </ScrollView>
        </SafeAreaView >
      </View>
    )
  }
}

export default Home
