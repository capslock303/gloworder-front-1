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

  state = {
    phone: "",
    phoneError: false
  }

  isValidPhone(phoneNumber) {
    if (/^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/.test([phoneNumber])) {
      phoneNumber = this.formatPhone(phoneNumber)
      this.setState({ phone: phoneNumber, phoneError: false })
    } else {
      this.setState({ phone: phoneNumber, phoneError: true })
    }
  }

  formatPhone(text) {
    const regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/
    return text.replace(regex, '($1) $2-$3')
  }

  checkPhone(id, value) {

  }

  render() {
    return (
      <View style={styles.loginPage}>

        <LinearGradient colors={['#ff7f04', '#f5ebbe']} style={styles.linearGradient}>
          <Text style={styles.header2}>gloworder</Text>

          <TextInput
            id="name"
            placeholder="Full Name"
            style={styles.loginField}
            onChangeText={(text) => this.checkInputs('name', text)}
          />


          <TextInput
            id="phone"
            placeholder="Phone Number"
            style={styles.loginField}
            value={this.state.phone}
            onChangeText={(text) => this.isValidPhone(text)}
          />

          <DatePicker
            id="DOB"
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
            id="password"
            placeholder="Password"
            style={styles.loginField}
          />

          <View style={styles.loginButton}>
            <Button
              color="grey"
              title="Next"
              // Use below in production
              // disabled={!this.state.inputsValid && true}
              // For Testing Only
              onPress={() => this.props.moveScreen('SignUp2')}
            />
          </View>
          <View style={styles.loginButton}>
            <Button
              color="grey"
              title="Back"
              onPress={() => this.props.moveScreen('Login')}
            />
          </View>

        </LinearGradient>
      </View>

    )
  }

}

export default SignUp