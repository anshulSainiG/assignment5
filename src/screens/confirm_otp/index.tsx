import {Text, View, TextInput, Alert} from 'react-native';
import React, {useState, useRef, useContext} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import axios from '../../api/baseapi';
import Head from '../../components/mainhead';
import Button from '../../components/button';
import {styles} from './style';
import {SignUpStackParamList} from '../../navigator/naviagtion';
import {OnBoardingContext} from '../../context_api/context_api';
type LogInSignUpProps = NativeStackScreenProps<
  SignUpStackParamList,
  'confirmOtp'
>;

const ConfirmOtp: React.FC<LogInSignUpProps> = props => {
  const {navigation} = props;
  const {otpPassword, phoneNo, dialCode} = useContext(OnBoardingContext);
  const [validOtp, setValidOtp] = useState('');

  const input1 = useRef<TextInput>(null);
  const input2 = useRef<TextInput>(null);
  const input3 = useRef<TextInput>(null);
  const input4 = useRef<TextInput>(null);

  const signIn = {
    countryCode: dialCode,
    phoneNumber: phoneNo,
    otpPassword: otpPassword,
  };

  const focusNextInput = (nextInput: React.RefObject<TextInput> | null) => {
    if (nextInput && nextInput.current) {
      nextInput.current.focus();
    }
  };

  const pressHandler = () => {
    postSignUpApi;
    if (otpPassword === validOtp) {
      navigation.navigate('signInUsingPassword');
    } else {
      Alert.alert("Your OTP didn't match");
    }
  };
  const postSignUpApi = async () => {
    console.log();
    try {
      await axios.post('/api/v1/users/verify-otp', signIn).then(({data}) => {
        if (data.status === 'success') {
          console.log(data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Head
        signIn={'SIGN IN'}
        catalyst="Catalyst"
        signInWith="SIGN IN WITH"
        mobileNumber="MOBILE NUMBER"
      />

      <View style={styles.textField}>
        <Text style={styles.textName}>
          Enter 4 digit OTP send on your number
        </Text>
        <View style={styles.innerContainer}>
          <View style={styles.innerTextField}>
            <TextInput
              style={styles.innerContainerTextInput}
              keyboardType="numeric"
              ref={input1}
              onChangeText={text => {
                if (text.length === 1) {
                  focusNextInput(input2);
                  setValidOtp(pvre => (pvre += text));
                }
              }}
            />
          </View>
          <View style={styles.innerTextField}>
            <TextInput
              style={styles.innerTextFieldText}
              keyboardType="numeric"
              maxLength={1}
              ref={input2}
              onChangeText={text => {
                if (text.length === 1) {
                  focusNextInput(input3);
                  setValidOtp(pvre => (pvre += text));
                } else {
                  focusNextInput(input2);
                }
              }}
            />
          </View>
          <View style={styles.innerTextField}>
            <TextInput
              style={styles.innerTextFieldText_}
              keyboardType="numeric"
              maxLength={1}
              ref={input3}
              onChangeText={text => {
                if (text.length === 1) {
                  focusNextInput(input4);
                  setValidOtp(pvre => (pvre += text));
                } else {
                  focusNextInput(input2);
                }
              }}
            />
          </View>
          <View style={styles.innerTextField}>
            <TextInput
              style={styles.innerTextFieldText_}
              keyboardType="numeric"
              maxLength={1}
              ref={input4}
              onChangeText={text => {
                if (text.length === 1) {
                  focusNextInput(input4);
                  setValidOtp(pvre => (pvre += text));
                }
              }}
            />
          </View>
        </View>
        <View style={styles.button}>
          <Button
            name={'Confirm OTP'}
            naviagate={pressHandler}
            backgroundcolor={'#6A1B1E'}
            color={'white'}
          />
        </View>
        <View style={styles.signIn}>
          <Text style={styles.signInText}>
            New User?<Text style={styles.userText}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
export default ConfirmOtp;
