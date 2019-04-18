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
            data={this.props.bars}
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
      </SafeAreaView >
    )
  }
}

export default Home


