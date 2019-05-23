
import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
  drinkOrder:{
    flexDirection: 'column',
    justifyContent:'space-evenly',
    padding: 15,
    marginTop: 3,
    marginBottom: 3 
  },
  linearGradient: {
    height: '100%',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    color: 'white',
    fontFamily: "lobster",
    fontSize: 60,
    fontWeight: 'bold',
    padding: 5,
    margin: 15,
    marginTop: 25,
    textAlign: 'center',
    textShadowColor: 'rgba(255, 255, 255, 1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 30
  },
  header2: {
    flexDirection: 'row',
    color: 'white',
    fontFamily: "lobster",
    fontSize: 45,
    fontWeight: 'bold',
    padding: 5,
    marginRight: 15,
    marginTop: 30,
    textAlign: 'right',
    textShadowColor: 'rgba(255, 255, 255, 1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20
  },
  headers3: {
    fontFamily: 'montserrat-regular',
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  headers4: {
    fontFamily: 'montserrat-regular',
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold'
  },
  headers5: {
    fontFamily: 'montserrat-regular',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  headers6: {
    fontFamily: 'montserrat-regular',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  headers6Light: {
    fontFamily: 'montserrat-regular',
    color: 'white',
    fontSize: 16,
  },
  outlineButton:{
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    borderWidth:2,
    borderRadius:5,
    borderColor: 'white',
    padding:5
  },
  confirm:{
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    padding:5
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
  formIcon: {
    color: 'orange',
    backgroundColor: 'white',
    fontSize: 25,
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
    color: 'white',
    marginLeft: 75,
    marginRight: 75,
    margin: 15,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  linkText: {
    color: 'white'
  },
  listItem: {
    flexDirection: 'row',
    height: 70,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  listItemText: {
    fontFamily: 'montserrat-regular',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  listItemTextWhite: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'montserrat-regular',
    color: 'white',
    marginBottom: 10
  },
  listItemSubText: {
    fontSize: 16,
    fontFamily: 'montserrat-regular',
    color: 'white',
  },
  ppIcon:{
    marginLeft: 45,
    width: '100%',
    height: '100%'
  },
  signUp:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 100,
    height: 25,
    margin: 7,
    alignItems:'center',
    alignSelf: 'center'
  },
  map: {
    height: 250,
    width: '100%',
    borderColor: 'white',
    borderWidth: 2
  },
  gridlist: {
    flex: 1,
    flexDirection: 'row'
  },
  gridItem: {
    height: 145,
    width: '80%',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 50
  },
  barViewOrderText: {
    justifyContent: 'flex-start',
    color: 'white',
    fontSize: 27,
    marginLeft: 5,
    marginTop: 5
  },
  barViewQuantityText: {
    justifyContent: 'flex-end',
    fontFamily: 'montserrat-regular',
    color: 'white',
    fontSize: 27,
    marginRight: 5,
    marginTop: 5
  },
  ulHead: {},
  ulSubtext: {}
})

export default styles
