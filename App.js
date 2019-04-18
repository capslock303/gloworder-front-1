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
    user:{
      name: null,
      phone: null
    },
  }


  setUserInfo(fieldId, value) {
    let userInfo = this.state.user
    userInfo.fieldId = value
    this.setState({ user: userInfo });
  }

  render() {
    return (
      // <AppContainer />
      <SignUp2Screen></SignUp2Screen>
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
          <Button title="Details" onPress={() => this.props.navigation.navigate('Details')} />
          <Button title="Details" onPress={() => this.props.navigation.navigate('Details')} />
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
        <Button title="Details" onPress={() => this.props.navigation.navigate('Details')} />
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
        <Button title="Details" onPress={() => this.props.navigation.navigate('Details')} />
      </SafeAreaView>
    )
  }
}




const FeedStack = createStackNavigator({
  Feed: {
    screen: FeedScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Feed',
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
  },
  FeedDetails: { screen: FeedDetails }
})

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Profile',
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
  }
})

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Settings',
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
  }
})

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
  SignUp: { screen: ((myprop) => {
    return class Component extends React.Component {
       render() {
         return <SignUpScreen setUserInfo={this.setUserInfo} />
       }
     }
   }) },
  SignUp2: { screen: ((myprop) => {
    return class Component extends React.Component {
       render() {
         return <SignUpScreen2 setUserInfo={this.setUserInfo} />
       }
     }
   })  }
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
  Home: { screen: AppDrawerNavigator }
})

const AppContainer = createAppContainer(AppSwitchNavigator)

