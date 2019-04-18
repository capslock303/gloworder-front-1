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


// Components
const bars = [
  {
    id: 1,
    name: 'The Attic Bar & Bistro',
    address: '949 Walnut St, Boulder, CO 80302'
  },
  {
    id: 2,
    name: 'Press Play',
    address: '1005 Pearl St, Boulder, CO 80302'
  },
  {
    id: 3,
    name: 'The Bitter Bar',
    address: '835 Walnut St, Boulder, CO 80302'
  }
]

class Home extends Component {

  state = {

  }


  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Bars Near Me</Text>
        </View>
        <ScrollView>
          <FlatList
            data={bars}
            keyExtractor={(item, index) => item.key}
            renderItem={({ item }) =>
              <View>
                <TouchableOpacity onPress={() => this.props.selectBar(item.id)}>
                  <Text>{item.name}</Text>
                  <Text>{item.address}</Text>
                </TouchableOpacity>
              </View>
            }
          />
        </ScrollView>
        <Button title="Fetch" onPress={() => this.props.fetchRestaurants()} />
      </SafeAreaView >
    )
  }
}

export default Home


