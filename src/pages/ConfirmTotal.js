// Resources
import React, { Component } from 'react'
import {
  Dimensions,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  ScrollView
} from 'react-native'

import styles from '../StyleGuide'
import LinearGradient from 'react-native-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
const IconCustom = createIconSetFromFontello(fontelloConfig);

// Components


class Order extends Component {

  state = {
    quantity: 1,
    name: "",
    orderStatus: null,
    total: null
  }

  componentDidMount = () => {
    this.findTotal()
    
  }

  add = () => {
    let count = this.state.quantity
    count++
    this.setState({ ...this.state, quantity: count }, () => this.findTotal())
  }

  subtract = () => {
    let count = this.state.quantity
    if (count >= 2) {
      count--
      this.setState({ ...this.state, quantity: count }, () => this.findTotal())
    }
    else {
      alert('Order cannot be less than 1')
    }
  }

  findTotal = () => {
    const drinkPrice = this.props.selectedDrink.price
    const optionPrice = this.props.selectedOption.price
    const drinkQuantity = this.state.quantity
    const total = ((drinkPrice + optionPrice) * drinkQuantity)
    this.setState({ ...this.state, total })
  }

  order = () => {
    const newOrder = {
      drinkId: this.props.selectedDrink.id,
      quantity: this.state.quantity,
      optionId: this.props.selectedOption.id,
      barId: this.props.selectedBar.id,
      name: this.state.name,
      drink: this.props.selectedDrink.liquor,
      option: this.props.selectedOption.option
    }
    count = 1
    this.props.compileOrders(newOrder)
    this.setState({
      ...this.state,
      orderStatus: 'confirmed'
    })
  }


  render() {
    let ScreenHeight = Dimensions.get("window").height;

    return (
      <View>
        <LinearGradient colors={['#ff8c00', '#ffa500']} style={styles.linearGradient}>
        <View>
          
            <Text style={styles.header2}>confirm</Text>
        </View>
        <SafeAreaView>
          {
            !this.state.orderStatus ?
              <View>
                <View >
                  <Text style={{...styles.headers3, alignSelf:'center'}}>{this.props.selectedDrink.liquor} {this.props.selectedOption.option.toLowerCase()}</Text>
                  <Text style={styles.headers3}></Text>
                </View>
                <IconCustom name={this.props.selectedDrink.liquor.toLowerCase().split(" ").join("")} style={{ fontSize: 100, color: 'white' , alignSelf: 'center'}}></IconCustom>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 25 }}>
                  
                  <TouchableOpacity
                    style={{ justifyContent: 'flex-start'}}
                    onPress={() => this.subtract()}
                  >
                    <Text style={styles.outlineButton}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.headers4}>
                    {this.state.quantity}
                  </Text>

                  <TouchableOpacity
                    style={{ justifyContent: 'flex-end' }}
                    onPress={() => this.add()}
                  >
                    <Text style={styles.outlineButton}>+</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'column', justifyContent: 'center', marginTop:25 }}>
                  <TextInput
                    id="orderName"
                    placeholder="Name for Drink..."
                    style={{...styles.loginField, height: 50}}
                    onChangeText={(text) => this.setState({ ...this.state, name: text })}
                  />
                </View>

                <View style={{ flexDirection: 'column', justifyContent: 'center', marginTop: 25 }}>
                  {this.props.selectedDrink && <Text style={{...styles.headers6, alignSelf: 'center'}}>Drink Price: ${this.props.selectedDrink.price.toFixed(2)}</Text>}
                  {this.props.selectedOption.price > 0 && <Text style={{...styles.headers6, alignSelf: 'center'}}>Add Option: ${this.props.selectedOption.price.toFixed(2)}</Text>}
                  {this.state.total && <Text style={{...styles.headers5, marginTop:25, marginBottom:25, alignSelf: 'center'}}>Total: ${this.state.total.toFixed(2)}</Text>}
                </View>



                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <TouchableOpacity 
                    style={{...styles.navButton, alignSelf:'center'}}
                    onPress={() => this.props.cancel()} 
                  >
                    <Text style ={styles.linkText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={{...styles.navButton, alignSelf:'center'}}
                    title="Add to Order" 
                    onPress={() => this.order()} 
                    >
                    <Text style ={styles.linkText}>Order</Text>
                  </TouchableOpacity>
                </View>

              </View>
              :
              <View>
                {
                  this.props.loading ?
                
                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', marginTop: 150 }}>
                  <Text style={{...styles.headers3, textAlign: 'center'}}>Your order is being placed!</Text>
                  <ActivityIndicator 
                    style={{alignSelf: 'center', padding: 10, marginTop: 50}}
                    size="large" 
                    color="#ff7f04" 
                  />
                </View>
                :
                <View>
                  <Text style={{...styles.header2, textAlign: 'center'}}>
                    {this.state.quantity} {this.props.selectedDrink.liquor.toLowerCase()} 
                  </Text>
                  <Text style={{...styles.headers3, textAlign: 'center'}}>
                    {this.props.selectedOption.option.toLowerCase()}
                  </Text>
                  <Text style={{...styles.headers4, textAlign: 'center'}}>added to order!</Text>
                  
                  <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginTop:20 }}>
                    <TouchableOpacity
                      style={{...styles.gridItem , margin:10, alignSelf: 'center', height:ScreenHeight/5}}
                      onPress={() => this.props.addDrinksToOrder()}
                    >
                     
                      
                      <Text style={styles.confirm}> + <IconCustom name='tequila' style={{fontSize:28}}/> Add more drinks</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                      style={{...styles.gridItem , margin:10, alignSelf: 'center', height:ScreenHeight/5}}
                      onPress={() => this.props.postOrder()}
                    >
                      
                      <Text style={styles.confirm}> ✓ Place order </Text>
                    
                    </TouchableOpacity>
                    {/* <Text style={{textAlign: 'center', marginTop:20}}>Please confirm by hitting "Place Order"! Otherwise add more drinks. button</Text> */}
                  </View>
                </View>
                }
              </View>
          }
        </SafeAreaView>
        </LinearGradient>
      </View>
    )
  }
}

export default Order
