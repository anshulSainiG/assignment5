import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useContext } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from "./styles"
import { createCox } from '../../context_api/context_api';
import Head from '../../components/mainhead/head';
import Button from '../../components/button/button';
import { SignUpStackParamList } from "../../navigator/naviagtion";
import axios from "../../api/baseapi"


type LogInSignUpProps = NativeStackScreenProps<SignUpStackParamList, 'signpassword'>

const Signinusingpassword = () => {
    const useConx = useContext(createCox);
    
    return (

        <View style={styles.maincontainer}>
            <Head name={"SIGN IN"}  name1='Catalyst' name2='SIGN IN WITH' name3='CATALYST ID'/>
            <View style={styles.textfield}>
                <Text style={styles.textname}>Enter Username</Text>
                <TextInput style={styles.textinput} value={useConx.name} onChangeText={(text)=>useConx.setName(text)}/>
                <Text style={styles.textname}>Enter Password </Text>
                <TextInput style={styles.textinput}  value={useConx.passwordd} onChangeText={(text)=>useConx.setPassword(text)} />
                <View style={{alignItems:"flex-end",paddingRight:26,paddingVertical:5}}>
                    <Text style={{color:"black",textDecorationLine:"underline"}}>Forgot Password?</Text>
                </View>
                <View style={styles.button}>
                <Button name={"SignIn using Password"} backgroundcolor={"#6A1B1E"} color={"white"} naviagate={function (): void {
                        throw new Error('Function not implemented.');
                    } } />
             </View>
            <View style={styles.signin}>
                <Text style={styles.signintext}>
                    New User?<Text style={{fontWeight:"bold"}}>Sign Up</Text>
                </Text>
            </View>
            </View>
        </View>
    )
}
export default Signinusingpassword

