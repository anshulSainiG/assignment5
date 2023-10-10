import { Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';


import Button from "../../components/button/button";
import { SignUpStackParamList } from "../../navigator/naviagtion";
import { OnBoardingStyles } from './on_board_style';
type LogInSignUpProps = NativeStackScreenProps<SignUpStackParamList,'onboardingScreen'>

const OnBoarding = ( {navigation}:LogInSignUpProps) => {
    const PressHandler = () =>{        
        navigation.navigate('createaccount');
    }
    return (
        <View style={ OnBoardingStyles.maincontainer}>
            <View style={ OnBoardingStyles.maintext}>
            <Text style={ OnBoardingStyles.name}>Catalyst</Text>
            </View>
            <View style={ OnBoardingStyles.image}>
            <Image source={require("../../assests/image/group.png")} />
            </View>
            <View style={ OnBoardingStyles.textcontainer}>
                <Text style={ OnBoardingStyles.strategy}>STRATEGIZE</Text>
                <Text style={ OnBoardingStyles.yourgame}>YOUR GAME</Text>
                <Text style={ OnBoardingStyles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita facilis fugit,
                    obcaecati neque</Text>
            </View>
            <Button name={"Login"} naviagate={()=>{}} backgroundcolor={"#6A1B1E"} color={"white"} />
            <Button name={"SignUp"}  naviagate={PressHandler} backgroundcolor={"white"} color={"#6A1B1E"}/>
            
        </View>
    )
}
export default OnBoarding


