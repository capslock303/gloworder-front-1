import { tsPropertySignature } from '@babel/types';
import React, { Component} from 'react'
import styles from '../StyleGuide'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image 
  
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

      <LinearGradient colors={['#ff8c00', '#ffa500']}  style={styles.linearGradient}>
        <Text style={{...styles.header, marginTop: 50}}>gloworder</Text>


         <View style={{...styles.loginField}}>
         <Icon name='phone' style={styles.formIcon} />  
        <TextInput
          placeholder="phone number"
          value={this.state.phone}
          style={{marginLeft:'auto',marginRight:'auto' }}
          onChangeText={(text)=>this.isValidPhone( text)}
        />
        </View> 

        
        

        <Text style={styles.error}>
          {this.state.phoneError? "phone number invalid" : "" }
        </Text>

      <View style={{...styles.loginField}}>
         <Icon name='key' style={styles.formIcon} />  
        <TextInput
          placeholder="password"
    
          style={{marginLeft:'auto',marginRight:'auto' }}
          secureTextEntry={true}
        />
        </View> 


        <View style={styles.loginButton}>
          <Button
            color="white"
            title="login"
            onPress={() => this.props.moveScreen('Home')}
          />
        </View>

        <View style={styles.loginButton}>
          
          <TouchableOpacity style={styles.signUp} onPress={() => this.props.moveScreen('Home')}>
            <Image style={styles.ppIcon} source={require('../../assets/icons/paypal.png')} />
            <Text style={{...styles.linkText, marginRight: 10}}> 
              sign up
            </Text>
          </TouchableOpacity>
          
        </View>

      </LinearGradient>
    </View>

  )
}
}

export default Login
