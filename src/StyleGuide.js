
import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
    padding: 5,
    margin: 15,
    textAlign: 'center',
    textShadowColor: 'rgba(155, 155, 155, 0.65)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 50
  },
  header2: {
    flexDirection: 'row',
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    padding: 5,
    margin: 15,
    textAlign: 'right',
    textShadowColor: 'rgba(155, 155, 155, 0.65)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 50
  },
  headers3: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  paragraph: {
    flexDirection: 'row',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center'
  },
  error: {
    flexDirection: 'row',
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  formIcon:{
    color: 'orange', 
    backgroundColor: 'white', 
    fontSize:25, 
    marginRight: 15
  },
  loginPage: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginField: {
    flexDirection: 'row',
    height: 40,
    padding: 5,
    margin: 5,
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: 'white',
    textAlign: 'center',
    justifyContent: 'center'
  },
  loginButton: {
    marginLeft: 75,
    marginRight: 75,
    margin: 15,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  linkText: {
    color: 'blue'
  },
  listItem: {
    flexDirection: 'row',
    height: 70,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  listItemText: {
    fontSize: 24
  },
  listItemSubText: {
    fontSize: 16

  }
})

export default styles