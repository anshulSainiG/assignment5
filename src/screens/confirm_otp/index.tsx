import { StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import React, { useState, useRef, useContext } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from "../../api/baseapi"
import Head from "../../components/mainhead/head";
import Button from "../../components/button/button";
import { styles } from './style';
import { SignUpStackParamList } from "../../navigator/naviagtion";
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import { createCox } from '../../context_api/context_api';
type LogInSignUpProps = NativeStackScreenProps<SignUpStackParamList, 'confirmotp'>

const ConfirmOtp = ({ navigation }: LogInSignUpProps) => {
    const { otpPassword, phoneno, dialCode } = useContext(createCox)
    const [validOtp, setValidOtp] = useState("")
    const useConx = useContext(createCox);



    const input1 = useRef<TextInput>(null);
    const input2 = useRef<TextInput>(null);
    const input3 = useRef<TextInput>(null);
    const input4 = useRef<TextInput>(null);

    const signIn = {
        "countryCode": dialCode,
        "phoneNumber": phoneno,
        "otpPassword": otpPassword
    }


    const focusNextInput = (nextInput: React.RefObject<TextInput> | null) => {
        if (nextInput && nextInput.current) {
            nextInput.current.focus();
        }
    };


    const pressHandler = () => {
        if (otpPassword === validOtp) {

            navigation.navigate('signpassword')
        } else {
            Alert.alert("Your OTP didn't match")
        }
    }
    const postSignUpApi = async () => {
        console.log()
        try {
            await axios.post('/api/v1/users/verify-otp', signIn)
                .then(({ data }) => {
                    if (data.status === "success") {
                        console.log(data)
                    }
                }

                );
        }
        catch (error) {
            console.log(error);

        }
    }
    return (

        <View style={styles.mainContainer}>

            <Head name={"SIGN IN"} name1='Catalyst' name2='SIGN IN WITH' name3='MOBILE NUMBER' />


            <View style={styles.textField}>
                <Text style={styles.textName}>Enter 4 digit OTP send on your number</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-around", paddingTop: 10 }}>
                    <View style={styles.innerTextField}>
                        <TextInput style={{ flex: 1, color: "black", textAlign: "center", fontWeight: "bold" }} keyboardType="numeric"
                            ref={input1} onChangeText={(text) => {
                                if (text.length == 1) {
                                    focusNextInput(input2)
                                    setValidOtp((pvre) => (pvre += text))
                                }
                            }} />
                    </View>
                    <View style={styles.innerTextField}>
                        <TextInput style={{ flex: 1, color: "black", textAlign: "center", fontWeight: "bold" }} keyboardType="numeric" maxLength={1} ref={input2}
                            onChangeText={(text) => {
                                if (text.length == 1) {
                                    focusNextInput(input3)
                                    setValidOtp((pvre) => (pvre += text))
                                }
                                else {
                                    focusNextInput(input2)

                                }
                            }}


                        />
                    </View>
                    <View style={styles.innerTextField}>
                        <TextInput style={{ flex: 1, color: "black", textAlign: "center", fontWeight: "bold" }} keyboardType="numeric" maxLength={1} ref={input3}
                            onChangeText={(text) => {
                                if (text.length == 1) {
                                    focusNextInput(input4)
                                    setValidOtp((pvre) => (pvre += text))

                                } else {
                                    focusNextInput(input2)
                                }
                            }} />
                    </View>
                    <View style={styles.innerTextField}>
                        <TextInput style={{ flex: 1, color: "black", textAlign: "center", fontWeight: "bold" }} keyboardType="numeric" maxLength={1} ref={input4}
                            onChangeText={(text) => {
                                if (text.length == 1) {
                                    focusNextInput(input4)
                                    setValidOtp((pvre) => (pvre += text))
                                }
                            }} />
                    </View>


                </View>
                <View style={styles.button}>
                    <Button name={"Confirm OTP"} naviagate={pressHandler} backgroundcolor={"#6A1B1E"} color={"white"} />
                </View>
                <View style={styles.signIn}>
                    <Text style={styles.signInText}>
                        New User?<Text style={{ fontWeight: "bold" }}>Sign Up</Text>
                    </Text>
                </View>
            </View>

        </View>

    )

}
export default ConfirmOtp
