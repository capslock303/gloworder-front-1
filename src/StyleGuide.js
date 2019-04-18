
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
    padding: 5,
    textAlign: 'center'
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
    margin: 10,
    backgroundColor: 'white',
    textAlign: 'center'
  },
  loginButton: {
    paddingLeft: 75,
    paddingRight: 75,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  linkText: {
    color: 'blue'
  },
})

export default styles