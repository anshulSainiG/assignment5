import { Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { OnBoardingStyles } from '../../screens/on_boarding/onboardstyle'


type buttonProps = {
    name : string,
    backgroundcolor: string,
    color: string,
    naviagate:()=>void
}
const Button = (props : buttonProps) => {
        // const PressHandler = () =>{        
        //     navigation.navigate('createaccount');
        // // }
    const {name,backgroundcolor,color,naviagate} = props;
    return (
        <View style={ OnBoardingStyles.btn}>
            <TouchableOpacity style={[ OnBoardingStyles.loginbtn,{backgroundColor:backgroundcolor}]} onPress={naviagate}>
                <Text style={[OnBoardingStyles.logintext,{color:color}]}>{name}</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={ onboardingstyles.signupbtn}>
                <Text style={ onboardingstyles.signuptext}>{name1}</Text>
            </TouchableOpacity> */}
        </View>
    )
}
export default Button
