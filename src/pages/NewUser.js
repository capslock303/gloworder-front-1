import React, { Component } from 'react'
import styles from '../StyleGuide'
import LinearGradient from 'react-native-linear-gradient'
import DatePicker from 'react-native-datepicker'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Image
} from 'react-native'



class NewUser extends Component {
  isValidEmail(email) {
    return /^[^@]+@[^@.]\.\w{3}$/i.test(email)
  }

  formatEmail(text) {
    const regex = /^([^@]+)@([^@.])\.(\w{3})$/
    return text.replace(regex, '$1@$2.$3')
  }

  render() {
    return (
      <SafeAreaView >
        <View style={styles.loginPage}>

          <LinearGradient colors={['#ff8c00', '#ffa500']} style={styles.linearGradient}>
            <Text style={styles.header2}>gloworder</Text>

            <View>
              <Image />
              <Text style={styles.paragraph}>
                GLOWORDER is an app...actually, two apps. Well, one app...
                One app is for the customer and one is for the server/bartender.
                In that regard, it's similar to UBER where there is an app for drivers and an app for riders.
          </Text>
            </View>
            <View style={styles.loginButton}>
              <Button
                color="grey"
                title="Get Odering"
                onPressIn={() => alert('Hello World!')}
              />
            </View>

          </LinearGradient>
        </View>

      </SafeAreaView>
    )
  }
}

export default NewUser