import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
  },
  body: {
    backgroundColor: '#F3F4F9',
    height: '72%',
  },
  text: {
    color: 'black',
  },
  inputText2: {
    borderWidth: 1,
    marginVertical: 12,
    borderColor: 'white',
    backgroundColor: 'white',
    paddingLeft: 10,
    borderRadius: 4,
    color: 'black',
  },
  inputText3: {
    borderWidth: 1,
    marginVertical: 12,
    borderColor: 'white',
    backgroundColor: 'white',
    paddingLeft: 10,
    borderRadius: 4,
    color: 'black',
    flexGrow: 1,
  },

  checkBox: {
    flexDirection: 'row',
    padding: 20,
  },
  innerCheckBox: {
    height: 20,
    width: 22,

    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#6A1B1E',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxText: {
    paddingLeft: 5,
    color: 'black',
  },
  para: {
    textAlign: 'justify',
    // backgroundColor:"blue"
  },
  signInText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    //  backgroundColor:"red",
    // paddingTop:35,
    justifyContent: 'center',
  },
  inputText1: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    paddingLeft: 10,
    borderRadius: 20,
    color: 'black',
    fontSize: 16,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    // marginBottom: 10,
    paddingLeft: 2,
    // backgroundColor:"blue",
    marginTop: 20,
  },
  innerContainer: {
    padding: 15,
  },
  phoneNoTextField: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
    marginVertical: 8,
  },
  innerPhoneNoTextField: {
    width: '25%',
    flexDirection: 'row',
  },
  innerPhoneNoTextFieldText: {
    color: 'black',
    verticalAlign: 'middle',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  innerPhonenoTextFieldPressable: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  innerPhonenoTextFieldView: {
    width: '75%',
  },
  innerPasswordView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerPasswordBtn: {
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'center',
    paddingRight: 18,
    borderTopRightRadius: 4,
    borderBottomEndRadius: 4,
  },
  btnView: {
    height: '14%',
    width: '100%',
  },
  signInTextView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 50,
  },
  signInTextBtn: {
    alignSelf: 'center',
  },
  signInTextBtn_: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: 'black',
  },
  modalMainContainer: {
    height: '100%',
    width: '100%',
  },
  modalMainContainerBtn: {
    marginVertical: 15,
  },
  modalMainContainerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    // backgroundColor:'blue'
  },
});
