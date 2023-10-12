import {Text, View, TextInput} from 'react-native';
import React, {useContext} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles} from './style';
import Button from '../../components/button';
import Head from '../../components/mainhead';
import {OnBoardingContext} from '../../context_api/context_api';
import {SignUpStackParamList} from '../../navigator/naviagtion';
type LogInSignUpProps = NativeStackScreenProps<SignUpStackParamList, 'signIn'>;

const SignIn: React.FC<LogInSignUpProps> = props => {
  const {navigation} = props;
  const useConx = useContext(OnBoardingContext);
  const PressHandler = () => {
    navigation.navigate('confirmOtp');
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
        <View>
          <Text style={styles.textName}>Enter Phone Number</Text>
          <TextInput
            style={styles.textInput}
            value={useConx.phoneNo}
            onChangeText={text => useConx.setPhoneNo(text)}
          />
        </View>
        <View style={styles.button}>
          <Button
            name={'GenerateOTP'}
            naviagate={PressHandler}
            backgroundcolor={'#6A1B1E'}
            color={'white'}
          />
        </View>
        <View style={styles.signIn}>
          <Text style={styles.signInText} onPress={PressHandler}>
            New User?<Text style={{}}>Sign UP</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
export default SignIn;
