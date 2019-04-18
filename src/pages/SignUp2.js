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
  state={
    email:"",
    emailError: false,
    ccNum:"",
    ccNumError: false,
    date: ""
  }
  

  isValidEmail(email) {
    if (/^\s*(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/i.test(email)){
      email = this.formatEmail(email)
      this.setState({email: email, emailError: false})
    } else {
      this.setState({email: email, emailError: true})
    }
  }

  isValidCardNumber(ccNum) {
    if (/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/i.test(ccNum)){
      ccNum = this.formatCCNum(ccNum)
      this.setState({ccNum: ccNum, ccNumError: false})
    } else {
      this.setState({ccNum: ccNum, ccNumError: true})
    }
  }

  formatCCNum(text) {
    text = text.replace(/\s+/g, '')
    return text.replace(/[-,]/g, '')
  }
  
  formatEmail(text) {
    return text.replace(/\s+/g, '')
  }

  render() {
    return (
        <View style={styles.loginPage}>

          <LinearGradient colors={['#ff7f04', '#f5ebbe']} style={styles.linearGradient}>
            <Text style={styles.header2}>gloworder</Text>

            <TextInput
              placeholder="Email"
              style={styles.loginField}
              value={this.state.email}
              onChangeText={text => this.isValidEmail(text)}
            />

            <Text style={styles.error}>
              {this.state.emailError? "Email must be email@domain.com" : "" }
            </Text> 

            <TextInput
              placeholder="Credit Card Number"
              style={styles.loginField}
              onChangeText={text => this.isValidCardNumber(text)}
            />

            <Text style={styles.error}>
              {this.state.ccNumError? "Invalid Card Number" : "" }
            </Text>

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
                date={this.state.date}
                mode="date"
                format="YYYY-MM-DD"
                minDate="2019-05-06"
                maxDate="2040-01-01"
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
                onDateChange={(date) => { this.setState({date:date}) }}
              />
            </View>
            <View style={styles.loginButton}>
              <Button
                color="grey"
                title="Sign Up"
                onPressIn={() => alert('Hello World!')}
              />
            </View>

          </LinearGradient>
        </View>

    )
  }
}

export default SignUp2