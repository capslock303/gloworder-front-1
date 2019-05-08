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

  colorNameToHex = (color,index)=>{
    const colors = {
      "red":["1e90ff","#dc143c"],
      "blue":["00ffff","##0000ff"],
      "gold":["#DAA520","#FFFF00"],
      "green":["#7CFC00","#008000"],
      "purple":["#8A2BE2","#FF00FF"],
    };
    return colors[color][index];
  }


  return (
    <View>
      <LinearGradient colors={[colorNameToHex(props.color,0), colorNameToHex(props.color,1)]} style={styles.linearGradient}>
        <Text style={styles.header2}>gloworder</Text>
        <Button title="Home" onPress={() => props.goHome()} />

        <View>
          <SafeAreaView >
            <ScrollView >
                <Text style={styles.listItemTextWhite}>
                  {`${props.bars.find(bar => bar.id === props.currentOrder[0].barId).name}`}      
                </Text>
              <FlatList
                
                data={props.currentOrder}
                keyExtractor={(item, index) => item.liquor}
                renderItem={({ item }) =>
      
                    <View style={{flexDirection:'row', marginTop:10}}>
                      <IconCustom name={item.option.toLowerCase().split(" ").join("")} style={{ fontSize: 35, color: 'black' , margin: 10}} />
                      <View style={{flexDirection:'column'}}>
                        <Text style={{...styles.listItemText, marginLeft: 10}}>
                          {`${item.quantity} ${item.drink} ${item.option} `}
                        </Text>
                        <Text style={{...styles.listItemText,marginLeft: 30, fontSize: 20}}>
                          {`${item.name ? `for ${item.name}` : '' }`}
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