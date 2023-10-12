import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
  },
  mainHeading: {
    height: '10%',
    justifyContent: 'flex-end',
  },
  mainText: {
    fontSize: 30,
    color: '#6A1B1E',
    paddingLeft: 19,
    fontWeight: 'bold',
  },
  account: {
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
    height: '80%',
  },
  textName: {
    marginTop: 20,
    paddingLeft: 20,
    color: '#24272B',
    fontSize: 15,
  },

  innerTextField: {
    height: 45,
    width: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'white',
  },

  signIn: {
    alignItems: 'center',
    height: '50%',
    justifyContent: 'flex-end',
  },
  signInText: {
    color: '#000000',
  },
  button: {
    height: '15%',
  },
  innerTextFieldText: {
    flex: 1,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  innerTextFieldText_: {
    flex: 1,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  userText: {
    fontWeight: 'bold',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  innerContainerTextInput: {
    flex: 1,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
