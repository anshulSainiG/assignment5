import {Text, View, TextInput} from 'react-native';
import React, {useContext} from 'react';

import {styles} from './styles';
import {OnBoardingContext} from '../../context_api/context_api';
import Head from '../../components/mainhead';
import Button from '../../components/button';

const SignInUsingPassword = () => {
  const useConx = useContext(OnBoardingContext);

  return (
    <View style={styles.mainContainer}>
      <Head
        signIn={'SIGN IN'}
        catalyst="Catalyst"
        signInWith="SIGN IN WITH"
        mobileNumber="CATALYST ID"
      />
      <View style={styles.textField}>
        <Text style={styles.textName}>Enter Username</Text>
        <TextInput
          style={styles.textInput}
          value={useConx.name}
          onChangeText={text => useConx.setName(text)}
        />
        <Text style={styles.textName}>Enter Password </Text>
        <TextInput
          style={styles.textInput}
          value={useConx.passwordd}
          onChangeText={text => useConx.setPassword(text)}
        />
        <View style={styles.forgotText}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </View>
        <View style={styles.button}>
          <Button
            name={'SignIn using Password'}
            backgroundcolor={'#6A1B1E'}
            color={'white'}
            naviagate={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </View>
        <View style={styles.signIn}>
          <Text style={styles.signInText}>
            New User?<Text style={styles.signUpText}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
export default SignInUsingPassword;
