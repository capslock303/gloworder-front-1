import { tsPropertySignature } from '@babel/types';
import React, { Component} from 'react'
import styles from '../StyleGuide'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import PayPalModal from './PayPalModal'

import {
  Modal,
  Alert,
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
    phoneError: false,
    modalVisible: false
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

  state = {
    modalVisible: false,
  };

  setModalVisible = (visible)=> {
    this.setState({modalVisible: visible});
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

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{...styles.modalBackground}}>
            <View style={{...styles.PPInfo}}>
              <PayPalModal moveScreen={this.props.moveScreen} setModalVisible={this.setModalVisible}>

              </PayPalModal>
            </View>
          </View>
        </Modal>

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
          
          <TouchableOpacity style={{...styles.signUp}} onPress={() => {this.setModalVisible(true);
          }}>
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
