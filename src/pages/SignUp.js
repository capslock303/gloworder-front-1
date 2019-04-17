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



class SignUp extends Component {
  isValidTelephone(telephone) {
    return /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/.test(telephone)
  }

  formatTelephone(text) {
    const regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/
    return text.replace(regex, '($1) $2-$3')
  }

  render() {
    return (
        <View style={styles.loginPage}>

          <LinearGradient colors={['#ff7f04', '#f5ebbe']} style={styles.linearGradient}>
            <Text style={styles.header2}>gloworder</Text>

            <TextInput
              placeholder="Full Name"
              style={styles.loginField}
            />

            <TextInput
              placeholder="Phone"
              style={styles.loginField}
            />

            <DatePicker
              style={{ width: '95%', marginLeft: 10 }}
              placeholder="Date Of Birth"
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

            <TextInput
              placeholder="Password"
              style={styles.loginField}
            />

            <View style={styles.loginButton}>
              <Button
                color="grey"
                title="Next"
                onPress={() => this.props.navigation.navigate('SignUp2')}
              />
            </View>

          </LinearGradient>
        </View>

    )
  }

}

export default SignUp