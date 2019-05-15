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

import MapView, {Marker} from 'react-native-maps';
import styles from '../StyleGuide'
import LinearGradient from 'react-native-linear-gradient'

// Components

// let key = 0

class Home extends Component {

  state = {
    region: {
        latitude: 40.0150,
        longitude: -105.2705,
        latitudeDelta: 0.0400,
        longitudeDelta: 0.0200,
      }}

  onRegionChange = (region) =>{
    this.setState({ region });
  }

  componentDidMount(){
    this.props.clearOrder()
    this.props.fetchColor()
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
          <View style={{flexDirection:"row"}}>
            <Text style={{...styles.headers3,marginRight:75}}>Bars Near Me</Text>
            <Button style={{marginLeft:50, width:'auto'}} title="Bar View" onPress={() => this.props.barView()} />
          </View>

          <MapView
              style={styles.map}
              region={this.state.region}
              onRegionChangeComplete={this.onRegionChange}
            >
            {this.props.bars.map((bar, idx )=> {
              let gpsCoords = {
                latitude: parseFloat(JSON.parse(bar.location)[0]),
                longitude: parseFloat(JSON.parse(bar.location)[1])}
                
              return (<Marker
                key={idx}
                coordinate={gpsCoords}
                title={bar.name}
                description={bar.address}
              />
            )})}
          </MapView>

          <ScrollView>
            <FlatList
              data={this.props.bars}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) =>
                <TouchableOpacity
                  style={styles.listItem}
                  onPress={() => this.props.selectBar(item.id)}
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
