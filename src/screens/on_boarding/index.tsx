import { Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';


import Button from "../../components/button/button";
import { SignUpStackParamList } from "../../navigator/naviagtion";
import { OnBoardingStyles } from './on_board_style';
type LogInSignUpProps = NativeStackScreenProps<SignUpStackParamList,'onboardingScreen'>

const OnBoarding = ( {navigation}:LogInSignUpProps) => {
    const pressHandler = () =>{        
        navigation.navigate('createaccount');
    }
    return (
        <View style={ OnBoardingStyles.mainContainer}>
            <View style={ OnBoardingStyles.mainText}>
            <Text style={ OnBoardingStyles.name}>Catalyst</Text>
            </View>
            <View style={ OnBoardingStyles.image}>
            <Image source={require("../../assests/image/group.png")} />
            </View>
            <View style={ OnBoardingStyles.textContainer}>
                <Text style={ OnBoardingStyles.strategy}>STRATEGIZE</Text>
                <Text style={ OnBoardingStyles.yourGame}>YOUR GAME</Text>
                <Text style={ OnBoardingStyles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita facilis fugit,
                    obcaecati neque</Text>
            </View>
            <Button name={"Login"} naviagate={()=>{}} backgroundcolor={"#6A1B1E"} color={"white"} />
            <Button name={"SignUp"}  naviagate={pressHandler} backgroundcolor={"white"} color={"#6A1B1E"}/>
            
        </View>
    )
}
export default OnBoarding


