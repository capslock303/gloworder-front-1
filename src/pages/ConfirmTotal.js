// Resources
import React, { Component } from 'react'
import {
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
    this.props.fetchColor()
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
    return (
      <View>
        <View>
          <LinearGradient colors={['#ff7f04', '#f5ebbe']}>
            <Text style={styles.header2}>confirm</Text>
          </LinearGradient>
        </View>
        <SafeAreaView>
          {
            !this.state.orderStatus ?
              <View>
                <View >
                  <Text style={styles.headers3}>{this.props.selectedDrink.liquor} {this.props.selectedOption.option.toLowerCase()}</Text>
                  <Text style={styles.headers3}></Text>
                </View>
                <IconCustom name={this.props.selectedDrink.liquor.toLowerCase().split(" ").join("")} style={{ fontSize: 100, color: 'orange' , alignSelf: 'center'}}></IconCustom>
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

                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                  <Text style={{...styles.headers6Light, marginTop:25, alignSelf: 'center'}}>Name for Drink (optional)</Text>
                  <TextInput
                    id="orderName"
                    placeholder="Steven Brody Stevens..."
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
                  <Button 
                    title="Cancel" 
                    onPress={() => this.props.cancel()} 
                  />
                  <Button 
                    title="Add to Order" 
                    onPress={() => this.order()} 
                  />

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
                  <Text style={{...styles.headers3, textAlign: 'center'}}>{this.state.quantity} {this.props.selectedDrink.liquor.toLowerCase()} {this.props.selectedOption.option.toLowerCase()} added to order!</Text>
                  
                  <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginTop:20 }}>
                    <TouchableOpacity
                      style={{...styles.gridItem , margin:10, alignSelf: 'center'}}
                      onPress={() => this.props.addDrinksToOrder()}
                    >
                     
                      
                      <Text style={styles.confirm}> + <IconCustom name='tequila' style={{fontSize:28}}/> Add more drinks</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                      style={{...styles.gridItem , margin:10, alignSelf: 'center'}}
                      onPress={() => this.props.postOrder()}
                    >
                      
                      <Text style={styles.confirm}> ✓ Place order </Text>
                    
                    </TouchableOpacity>
                    <Text style={{textAlign: 'center', marginTop:20}}>Please confirm by hitting "Place Order"! Otherwise add more drinks. button</Text>
                  </View>
                </View>
                }
              </View>
          }
        </SafeAreaView>
      </View>
    )
  }
}

export default Order
