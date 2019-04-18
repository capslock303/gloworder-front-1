import { tsPropertySignature } from '@babel/types';
import React, { Component } from 'react'
import styles from '../StyleGuide'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native'


class Login extends Component {

  state = {
    phone: "",
    phoneError: false
  }

  isValidPhone(phoneNumber) {
    if (/^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/.test([phoneNumber])){
      phoneNumber = this.formatPhone(phoneNumber)
      this.setState({phone: phoneNumber, phoneError: false})
    } else {
      this.setState({phone: phoneNumber, phoneError: true})
    }
  }

  formatPhone(text) {
    const regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/
    return text.replace(regex, '($1) $2-$3')
  }

  render(){
  return (
    <View style={styles.loginPage}>

      <LinearGradient colors={['#ff7f04', '#f5ebbe']} style={styles.linearGradient}>
        <Text style={styles.header}>gloworder</Text>


         <View style={{...styles.loginField}}>
         <Icon name='phone' style={styles.formIcon} />  
        <TextInput
          placeholder="Phone Number"
          value={this.state.phone}
          style={{marginLeft:'auto',marginRight:'auto' }}
          onChangeText={(text)=>this.isValidPhone( text)}
        />
        </View> 

        
        

        <Text style={styles.error}>
          {this.state.phoneError? "Phone number invalid" : "" }
        </Text>

      <View style={{...styles.loginField}}>
         <Icon name='textbox' style={styles.formIcon} />  
        <TextInput
          placeholder="Password"
    
          style={{marginLeft:'auto',marginRight:'auto' }}
          secureTextEntry={true}
        />
        </View> 


        <View style={styles.loginButton}>
          <Button
            color="lightgrey"
            title="Login"
            onPress={() => this.props.moveScreen('Home')}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
          <Text>New to gloworder?</Text>
          <TouchableOpacity onPress={() => this.props.moveScreen('SignUp')}
          ><Text style={styles.linkText}> Sign Up </Text></TouchableOpacity>
          <Text>here</Text>
        </View>

      </LinearGradient>
    </View>

  )
}
}

export default Login
