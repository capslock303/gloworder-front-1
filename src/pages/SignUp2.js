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
  Button
} from 'react-native'



class SignUp2 extends Component {
  isValidEmail(email) {
    return /^[^@]+@[^@.]\.\w{3}$/i.test(email)
  }

  formatEmail(text) {
    const regex = /^([^@]+)@([^@.])\.(\w{3})$/
    return text.replace(regex, '$1@$2.$3')
  }

  render() {
    return (
        <View style={styles.loginPage}>

          <LinearGradient colors={['#ff7f04', '#f5ebbe']} style={styles.linearGradient}>
            <Text style={styles.header2}>gloworder</Text>

            <TextInput
              placeholder="Email"
              style={styles.loginField}
            />

            <TextInput
              placeholder="Credit Card Number"
              style={styles.loginField}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

              <TextInput
                placeholder="CVV"
                style={{ ...styles.loginField, paddingLeft: 15, paddingRight: 15 }}
              />
              <TextInput
                placeholder="Zipcode"
                style={styles.loginField}
              />
              <DatePicker
                style={{ marginTop: 10 }}
                placeholder="Expiration"
                date={this.props.date}
                mode="date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    backgroundColor: 'orange',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36,
                    backgroundColor: 'white'
                  }
                }}
                onDateChange={(date) => { this.props.setDate(date) }}
              />
            </View>
            <View style={styles.loginButton}>
              <Button
                color="grey"
                title="Sign Up"
                onPress={() => this.props.nextScreen('Home')}
              />
            </View>

          </LinearGradient>
        </View>

    )
  }
}

export default SignUp2