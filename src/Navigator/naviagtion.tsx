import { NavigationContainer } from '@react-navigation/native';
import Splash from "../screens/splash"
import OnBoarding from "../screens/0n_boarding";
import Signin from "../screens/sign_in_mobile";
import React from 'react';

import ConfirmOtp from "../../src/screens/confirm_otp";

import { createCox } from "../contextapi/contextapi";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInUsingPassword from "../screens/sign_in_using_mobile";
import CreateAccount from "../screens/create_account";


export type SignUpStackParamList = {
    splashScreen: undefined,
    onboardingScreen: undefined,
    createaccount:undefined,
    signinnumber:undefined,
    confirmotp:undefined,
    signpassword:undefined

}
export const SignInStack = createNativeStackNavigator<SignUpStackParamList>();




export const MyStack = () => {
    const useContextApp = React.useContext(createCox);
    return (
        <NavigationContainer>{<SignInStack.Navigator>
            <SignInStack.Screen
                name="splashScreen"
                component={Splash}
                options={{ headerShown: false }} />
            <SignInStack.Screen
                name="onboardingScreen"
                component={OnBoarding}
                options={{ headerShown: false }} />
            <SignInStack.Screen
                name="createaccount"
                component={CreateAccount}
                options={{ headerShown: false }} />
            <SignInStack.Screen
                name="signinnumber"
                component={Signin}
                options={{ headerShown: false }} />
            <SignInStack.Screen
                name="confirmotp"
                component={ConfirmOtp}
                options={{ headerShown: false }} />
            <SignInStack.Screen
                name="signpassword"
                component={SignInUsingPassword}
                options={{ headerShown: false }} />




        </SignInStack.Navigator>}



        </NavigationContainer>

    );
};
