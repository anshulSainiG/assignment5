import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/splash';
import SignIn from '../screens/sign_in_mobile';
import React from 'react';
import ConfirmOtp from '../screens/confirm_otp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInUsingPassword from '../screens/sign_in_using_mobile';
import CreateAccount from '../screens/create_account';
import OnBoarding from '../screens/on_boarding';

export type SignUpStackParamList = {
  splashScreen: undefined;
  onBoarding: undefined;
  createAccount: undefined;
  signIn: undefined;
  confirmOtp: undefined;
  signInUsingPassword: undefined;
};
export const SignInStack = createNativeStackNavigator<SignUpStackParamList>();
export const MyStack = () => {
  return (
    <NavigationContainer>
      {
        <SignInStack.Navigator>
          <SignInStack.Screen
            name="splashScreen"
            component={Splash}
            options={{headerShown: false}}
          />
          <SignInStack.Screen
            name="onBoarding"
            component={OnBoarding}
            options={{headerShown: false}}
          />
          <SignInStack.Screen
            name="createAccount"
            component={CreateAccount}
            options={{headerShown: false}}
          />
          <SignInStack.Screen
            name="signIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <SignInStack.Screen
            name="confirmOtp"
            component={ConfirmOtp}
            options={{headerShown: false}}
          />
          <SignInStack.Screen
            name="signInUsingPassword"
            component={SignInUsingPassword}
            options={{headerShown: false}}
          />
        </SignInStack.Navigator>
      }
    </NavigationContainer>
  );
};
