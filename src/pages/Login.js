import React from 'react'
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


const Login = (props) => {
  return (
    <SafeAreaView >
      <View style={styles.loginPage}>

        <LinearGradient colors={['#ff7f04', '#f5ebbe']} style={styles.linearGradient}>
          <Text style={styles.header}>gloworder</Text>

          <TextInput
            placeholder="Login"
            style={styles.loginField}
          />
          <TextInput
            placeholder="Password"
            style={styles.loginField}
          />

        <View style={styles.loginButton}>
          <Button
            color="grey"
            title="Phone Number"
            onPressIn={() => alert('Hello World!')}
          />
        </View>

          <View style={{flexDirection:'row', justifyContent: 'center', marginTop: 5}}>
            <Text>New to gloworder?</Text>
            <TouchableOpacity onPress={() => alert('Sign Up Clicked')}
            ><Text style={styles.linkText}> Sign Up </Text></TouchableOpacity>
            <Text>here</Text>
          </View>

        </LinearGradient>
      </View>

    </SafeAreaView>
  )
}

export default Login