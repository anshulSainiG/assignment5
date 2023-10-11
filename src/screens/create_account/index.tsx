import { Text, TextInput, View, FlatList, Modal, Pressable, Alert, ScrollView } from 'react-native';
import React, { SetStateAction, useContext, Dispatch, useEffect } from 'react';
import { styles } from "./styles";
import Button from "../../components/button"
import Head from "../../components/mainhead";
import {OnBoardingContext} from "../../context_api/context_api";
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import { useState } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignUpStackParamList } from "../../navigator/naviagtion"
import axios from "../../api/baseapi"
import { passwordValidation } from "../../utilities/utilities"
import { CountryCode } from '../../assests/country_codes/country _codes';
import { Root } from '../../assests/data_model/data_model';


type itemProps = {
  name: string;
  dial_code: string;
  code: string;
}




export type LogInSignUpProps = NativeStackScreenProps<SignUpStackParamList, 'createAccount'>

const CreateAccount:React.FC<LogInSignUpProps> = (props) => {
  const{navigation}=props;
  const { name, phoneNo, passwordd, dialCode, setDialCode, setOtpPassword } = useContext(OnBoardingContext)
  const useConx = useContext(OnBoardingContext);
  const [showModal, setShowModal] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [check, setCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false)

  const iconPressed = () => {
    setShowPassword(!showPassword)
  }
  const handlePress = () => {
    setCheck(!check)
    setIsPressed(!isPressed)
  };

  const signIn = {
    "fullName": name,
    "phoneNumber": phoneNo,
    "countryCode": dialCode,
    "password": passwordd,
  }
  const handleNavigation = () => {

    if (passwordValidation(name, phoneNo, passwordd)) {


      postSignUpApi()
      navigation.navigate('signIn')
    }
    else {
      Alert.alert('At least  minimum 8 characters')
    }
  }
  const postSignUpApi = async () => {
    console.log()
    try {

      const response: Root = await (await axios.post('/api/v1/users/sign-up/mobile', signIn)).data
      console.log("signup mobile response", response.data.otp)
      setOtpPassword(response.data.otp)
    }
    catch (error) {
      console.log(error);

    }
  }
    const onClick = (item: itemProps) => {

      setDialCode(item.dial_code)

      setShowModal(false)

    }
    return (

      <View style={styles.mainContainer}>

        <Head signIn={"SIGN UP"} catalyst='Catalyst' signInWith='CREATE YOUR ' mobileNumber='ACCOUNT' />


        <View style={styles.body}>
          <View style={styles.innerContainer}>



            <Text style={styles.text}>Full Name</Text>
            <TextInput style={styles.inputText2} onChangeText={useConx.setName} />
            <Text style={styles.text}>Phone Number</Text>

            <View style={styles.phoneNoTextField} >
              <View style={styles.innerPhoneNoTextField}>
                <Text style={styles.innerPhoneNoTextFieldText}>{dialCode}</Text>

                <Pressable style={styles.innerPhonenoTextFieldPressable} onPress={() => setShowModal(true)}>

                  <AntDesign name="down" color="black" size={20} />
                </Pressable>
              </View>
              <View style={styles.innerPhonenoTextFieldView}>
                <TextInput style={styles.inputText1} maxLength={10} onChangeText={useConx.setPhoneNo} keyboardType="numeric" />
              </View>

            </View>
            <Text style={styles.text}>Password</Text>
            <View style={styles.innerPasswordView}>
              <TextInput style={styles.inputText3} onChangeText={(text) => useConx.setPassword(text)} secureTextEntry={!showPassword} />
              <Pressable style={styles.innerPasswordBtn} onPress={iconPressed} >


                <FontAwesome5 name={showPassword ? "eye" : "eye-slash"} color="black" size={20} />



              </Pressable>

            </View>


            <View style={[styles.checkBoxContainer]}>

              <Pressable style={[styles.innerCheckBox, { backgroundColor: isPressed ? '#6A1B1E' : 'white' }]} onPress={handlePress}>
                {

                  check ?
                    <View>
                      <AntDesign name="check" color="white" size={20} />
                    </View>
                    : null

                }
              </Pressable>
              <Text style={styles.checkBoxText}>I agree to the <Text style={{ color: "black", fontWeight: "bold", textDecorationLine: "underline" }}>Terms</Text> and <Text style={{ color: "black", fontWeight: "bold", textDecorationLine: "underline" }}>PrivacyPolicy</Text></Text>
            </View>

            <View style={styles.btnView}>
              <Button name={"SignUp"} naviagate={handleNavigation} backgroundcolor={"#6A1B1E"} color={"white"} />
            </View>
            <View >
              <Text style={styles.para}>By agreeing to the above terms,you are consenting that your
                personal information will be collected,and stored,processed in the United States and the European
                Union on behalf of sparity,Properties,Inc</Text>
            </View>
            <View style={styles.signInTextView}>
              <Text style={styles.signInText}>
                Existing User?
              </Text>
              <Pressable style={styles.signInTextBtn} onPress={handleNavigation}><Text style={styles.signInTextBtn_}> Sign In</Text></Pressable>
            </View>



          </View>
        </View >
        <Modal transparent={false}
          visible={showModal}>

          <View style={styles.modalMainContainer}>
            <FlatList
              data={CountryCode}
              renderItem={({ item }) => <Pressable style={styles.modalMainContainerBtn} onPress={() => onClick(item)}>

                <Text style={styles.modalMainContainerText}>{item.dial_code}</Text>
              </Pressable>}
              keyExtractor={item => item.code}
            />
          </View>
        </Modal>
      </View >



    )
  }

  export default CreateAccount
