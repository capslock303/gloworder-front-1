import { tsPropertySignature } from '@babel/types';
import React, { Component } from 'react'
import styles from '../StyleGuide'
import LinearGradient from 'react-native-linear-gradient'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Button
} from 'react-native'


class Login extends Component {

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

  render() {
    return (
      <View style={styles.loginPage}>

        <LinearGradient colors={['#ff7f04', '#f5ebbe']} style={styles.linearGradient}>
          <Text style={styles.header}>gloworder</Text>

          <TextInput
            placeholder="Phone Number"
            style={styles.loginField}
            value={this.state.phone}
            onChangeText={(text) => this.isValidPhone(text)}
          />

          <Text style={styles.error}>
            {this.state.phoneError ? "Phone number invalid" : ""}
          </Text>

          <TextInput
            placeholder="Password"
            style={styles.loginField}
          />

          <View style={styles.loginButton}>
            <Button
              color="grey"
              title="Login"
              onPress={this.props.login}
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
            <Text>New to gloworder?</Text>
            <TouchableOpacity onPress={() => this.props.nextScreen('SignUp')}
            ><Text style={styles.linkText}> Sign Up </Text></TouchableOpacity>
            <Text>here</Text>
          </View>

        </LinearGradient>
      </View>

    )
  }
}

export default Login