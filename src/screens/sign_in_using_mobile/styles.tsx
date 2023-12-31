import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
  },
  mainHeading: {
    // backgroundColor:"blue",
    height: '10%',
    justifyContent: 'flex-end',
  },
  mainText: {
    fontSize: 30,
    color: '#6A1B1E',
    paddingLeft: 19,
    // paddingTop: 40,
    fontWeight: 'bold',
  },
  account: {
    //  backgroundColor:"red",
    height: '15%',
    justifyContent: 'center',
  },
  create: {
    color: '#6A1B1E',
    paddingLeft: 19,
    fontWeight: 'bold',
    fontSize: 28,
  },
  textField: {
    backgroundColor: '#F3F4F9',
    height: '60%',
    // backgroundColor:"blue"
  },
  textName: {
    marginTop: 18,
    paddingLeft: 20,
    color: '#24272B',
    fontSize: 15,
  },
  textInput: {
    borderwidth: 2,
    backgroundColor: '#FFFFFF',
    width: '90%',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 10,
    paddingLeft: 15,
    borderRadius: 2,
  },

  signIn: {
    alignItems: 'center',
    // backgroundColor:"orange",
    height: '50%',
    justifyContent: 'flex-end',
  },
  signInText: {
    // fontWeight:"bold",
    color: '#000000',
  },
  button: {
    height: '15%',
    // backgroundColor:"blue"
  },
  forgotPassword: {
    color: 'black',
    textDecorationLine: 'underline',
  },
  signUpText: {
    fontWeight: 'bold',
  },
  forgotText: {
    alignItems: 'flex-end',
    paddingRight: 26,
    paddingVertical: 5,
  },
});
