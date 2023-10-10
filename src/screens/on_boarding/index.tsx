import { Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';


import Button from "../../components/button/button";
import { SignUpStackParamList } from "../../navigator/naviagtion";
import { styles } from './style';
type LogInSignUpProps = NativeStackScreenProps<SignUpStackParamList,'onboardingScreen'>

const OnBoarding = ( {navigation}:LogInSignUpProps) => {
    const pressHandler = () =>{        
        navigation.navigate('createaccount');
    }
    return (
        <View style={ styles.mainContainer}>
            <View style={ styles.mainText}>
            <Text style={ styles.name}>Catalyst</Text>
            </View>
            <View style={ styles.image}>
            <Image source={require("../../assests/image/group.png")} />
            </View>
            <View style={ styles.textContainer}>
                <Text style={ styles.strategy}>STRATEGIZE</Text>
                <Text style={ styles.yourGame}>YOUR GAME</Text>
                <Text style={ styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita facilis fugit,
                    obcaecati neque</Text>
            </View>
            <Button name={"Login"} naviagate={()=>{}} backgroundcolor={"#6A1B1E"} color={"white"} />
            <Button name={"SignUp"}  naviagate={pressHandler} backgroundcolor={"white"} color={"#6A1B1E"}/>
            
        </View>
    )
}
export default OnBoarding


