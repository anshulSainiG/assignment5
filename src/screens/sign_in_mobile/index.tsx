import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useContext } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from "./style"
import Button from "../../components/button/button";
import Head from "../../components/mainhead/head";
import { createCox } from "../../context_api/context_api";
import { SignUpStackParamList } from '../../navigator/naviagtion'
type LogInSignUpProps = NativeStackScreenProps<SignUpStackParamList, 'signinnumber'>

const Signin = ({ navigation }: LogInSignUpProps) => {
    const useConx = useContext(createCox);
    const PressHandler = () => {
        navigation.navigate('confirmotp');
    }
    return (

        <View style={styles.maincontainer}>
            <Head name={"SIGN IN"}  name1='Catalyst' name2='SIGN IN WITH' name3='MOBILE NUMBER'/>
            <View style={styles.textfield}>
                <View>
                <Text style={styles.textname}>Enter Phone Number</Text>
                <TextInput style={styles.textinput} value={useConx.phoneno}  onChangeText={(text)=>useConx.setPhoneno(text)} />
                </View>
                <View style={styles.button}>
                <Button name={"GenerateOTP"}  naviagate={PressHandler} backgroundcolor={"#6A1B1E"} color={"white"} />
             </View>
            <View style={styles.signin}>
                <Text style={styles.signintext} onPress={PressHandler}>
                    New User?<Text style={{fontWeight:"bold"}}>Sign UP</Text> 
                </Text>
            </View>
            </View>
        </View>
    )
}
export default Signin

