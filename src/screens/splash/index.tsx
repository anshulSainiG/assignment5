import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import{styles}from "./style"
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignUpStackParamList } from '../../navigator/naviagtion';

type LogInSignUpProps = NativeStackScreenProps<SignUpStackParamList,'splashScreen'>

const Splash = ({navigation}:LogInSignUpProps) => {
  const PressHandler = () =>{        
    navigation.navigate('onboardingScreen');
}
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={PressHandler} >
       <Image  source={require("../../assests/fonts/image/splashlogo.webp")}/>
      </TouchableOpacity>
    </View>
  )
}

export default Splash

