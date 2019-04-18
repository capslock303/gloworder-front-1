// Resources
import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button
} from 'react-native'

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator
} from 'react-navigation'

import Icon from 'react-native-vector-icons/FontAwesome'

// Components
import Login from './src/pages/Login'
import SignUpScreen from './src/pages/SignUp'
import SignUp2Screen from './src/pages/SignUp2'
import NewUser from './src/pages/NewUser'

class App extends Component {

  state = {
    loggedIn: false,
    date: new Date(),
  }


  setDate(newDate) {
    this.setState({ date: newDate });
  }

  render() {
    return (
      <AppContainer />
    )
  }
}

export default App


class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Home Screen</Text>
        </View>
      </SafeAreaView>
    )
  }
}

class DetailsScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Details Screen</Text>
      </SafeAreaView>
    )
  }
}


class FeedScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Button title="Details" onPress={() => this.props.navigation.navigate('FeedDetails')} />
      </SafeAreaView>
    )
  }
}

class FeedDetails extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Feed Details</Text>
      </SafeAreaView>
    )
  }
}

class ProfileScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Profile</Text>
      </SafeAreaView>
    )
  }
}

class SettingsScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Settings</Text>
      </SafeAreaView>
    )
  }
}


const HomeTabNavigator = createBottomTabNavigator(
  {
    FeedStack,
    ProfileStack,
    SettingsStack
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index]
      return {
        header: null,
        headerTitle: routeName
      }
    }
  })


const HomeStackNavigator = createStackNavigator(
  {
    HomeTabNavigator: HomeTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            name="navicon"
            size={30}
            onPress={() => navigation.openDrawer()}
          />
        )
      }
    }
  })

// Sign Up Stack
const SignUpStack = createStackNavigator({
  SignUp: { screen: SignUpScreen },
  SignUp2: { screen: SignUp2Screen }
})

// Drawer
const AppDrawerNavigator = createDrawerNavigator({
  Details: {
    screen: HomeStackNavigator
  }
})

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: Login },
  SignUp: { screen: SignUpStack },
  Home: { screen: HomeScreen }
})

const AppContainer = createAppContainer(AppSwitchNavigator)

