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
    phoneError: false,
    name: "",
    nameError: false,
    DOB: "",
    maxDate: ""
  }

  componentDidMount(){
    let maxDate = new Date()
    maxDate.setFullYear(maxDate.getFullYear()-21)
    const monthAbrvLookup = {
      Jan: '01',
      Feb: '02',
      Mar: '03',
      Apr: '04',
      May: '05',
      Jun: '06',
      Jul: '07',
      Aug: '08',
      Sep: '09',
      Oct: '10',
      Nov: '11',
      Dec: '12'
    }
    const maxDateArr = String(maxDate).split(" ")
    const maxDateStr = `${maxDateArr[3]}-${maxDateArr[2]}-${monthAbrvLookup[maxDateArr[1]]}`
    this.setState({maxDate:maxDateStr})
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



  isValidName(name){
    if (/^\s*([a-z]+)\s+([a-z]+)\s*$/i.test([name])){
      this.setState({name: name, nameError: false})
    } else {
      this.setState({name: name, nameError: true})
    }
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
            onChangeText={(text)=>this.isValidName(text)}
          />

          <Text style={styles.error}>
              {this.state.nameError? "Must include first and last name" : "" }
            </Text>

            <TextInput
                id="phone"
                placeholder="Phone Number"
                style={styles.loginField}
                value={this.state.phone}
                onChangeText={(text)=>this.isValidPhone( text)}
              />

              <Text style={styles.error}>
              {this.state.phoneError? "Phone number invalid" : "" }
            </Text>

            <DatePicker
                id="DOB"
                style={{ width: '95%', marginLeft: 10, marginBottom:10 }}
                placeholder="Date Of Birth"
                date={this.state.DOB}
                mode="date"
                format="YYYY-MM-DD"
                minDate="1920-01-01"
                maxDate={this.state.maxDateStr}
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
                onDateChange={(date) => { this.setState({DOB: date })}}
              />

              <TextInput
                  id="password"
                  placeholder="Password"
                  style={styles.loginField}
                  secureTextEntry={true}
                  autoCorrect={false}
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
