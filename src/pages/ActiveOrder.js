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
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
const IconCustom = createIconSetFromFontello(fontelloConfig);


const ActiveOrder = (props) => {

  colorNameToHex = (color)=>{
    const colors = {
      "red":["#ff7f50","#dc143c"],
      "blue":["#6495ed","#0000ff"],
      "gold":["#DAA520","#FFFF00"],
      "green":["#7CFC00","#008000"],
      "purple":["#8A2BE2","#FF00FF"],
    };
    return colors[color];
  }


  return (
    <View>
      <LinearGradient colors={colorNameToHex(props.color)} style={styles.linearGradient}>
        <Text style={styles.header}>gloworder</Text>
        <View style={{flexDirection:"row", justifyContent: 'space-evenly'}}>
          <TouchableOpacity onPress={() => props.goHome()} style={{...styles.navButton, alignSelf:'center'}}>
            <Text style ={styles.linkText}>home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.goMenu()} style={{...styles.navButton, alignSelf:'center'}}>
            <Text style ={styles.linkText}>menu</Text>
          </TouchableOpacity>
        </View>
        <View>
          <SafeAreaView >
            <ScrollView >
                <Text style={{...styles.listItemTextWhite, marginTop: 30}}>
                  {`${props.bars.find(bar => bar.id === props.currentOrder[0].barId).name}`}      
                </Text>
              <FlatList
                
                data={props.currentOrder}
                keyExtractor={(item, index) => item.liquor}
                renderItem={({ item }) =>
      
                    <View style={styles.activeItem}>
                      <IconCustom name={item.option.toLowerCase().split(" ").join("")} style={{ fontSize: 35, color: 'white' , margin: 10}} />
                      <View style={{flexDirection:'column'}}>
                        <Text style={{...styles.listItemText, marginLeft: 10}}>
                          {`${item.quantity} ${item.drink.toLowerCase()} ${item.option.toLowerCase()} `}
                        </Text>
                        <Text style={{...styles.listItemText,marginLeft: 30, fontSize: 16, fontWeight: 'normal'}}>
                          {`>> for ${item.name ? ` ${item.name}` : 'anonymous' }<<`}
                        </Text>
                      </View>
                    </View>
                    
      
                }

              />
            </ScrollView>
          </SafeAreaView>
        </View>

      </LinearGradient>
    </View>
  )
}

export default ActiveOrder