import React from 'react'

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


const ActiveOrder = (props) => {
  return (
    <View>
      <LinearGradient colors={['#2B93B3', '#70DEFF']} style={styles.linearGradient}>
        <Text style={styles.header2}>gloworder</Text>

        <View>
          <SafeAreaView>
            <ScrollView>
              <FlatList
                data={props.currentOrder}
                keyExtractor={(item, index) => item.liquor}
                renderItem={({ item }) =>
                  <View>
                    <Text style={styles.listItemTextWhite}>
                      {`${props.bars.find(bar => bar.id === props.currentOrder[0].barId).name}`}      
                    </Text>
                    <Text style={styles.listItemText}>
                      {`${item.quantity} ${item.drink} ${item.option} ${item.name ? `for ${item.name}` : ''}`}
                    </Text>
                  </View>
                }

              />
            </ScrollView>
            <Button title="Home" onPress={() => props.goHome()} />
          </SafeAreaView>
        </View>

      </LinearGradient>
    </View>
  )
}

export default ActiveOrder