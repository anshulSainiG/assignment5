import { Text, TextInput, View, FlatList, Modal, Pressable, Alert, ScrollView} from 'react-native';
import React, { SetStateAction, useContext, Dispatch, useEffect } from 'react';
import { styles } from "./styles";
import Button from "../../components/button/button"
import Head from "../../components/mainhead/head";
import { createCox } from "../../context_api/context_api";
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import { useState } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignUpStackParamList } from "../../navigator/naviagtion";


import axios from "../../api/baseapi"
import { passwordValidation} from "../../utilities/utilities"
import { CountryCode } from '../../assests/country_codes/country _codes';
// import CheckBox from 'react-native-check-box';

type itemProps = {
  name: string;
  dial_code: string;
  code: string;
}


export type Root ={
  status: string
  data: Data2
}

export type Data2 ={
  otp: string
  uuid: string
}


export type LogInSignUpProps = NativeStackScreenProps<SignUpStackParamList, 'createaccount'>

// const[countryname, setCountryname]=useState('')
// const[number,setNumber]=useState('')


const Createaccount = ({ navigation }: LogInSignUpProps) => {
  const { name, phoneno, passwordd,dialCode,setDialCode,setOtpPassword } = useContext(createCox)
  const useConx = useContext(createCox);
  const [showModal, setShowModal] = useState(false)
  // const [dialcode, setDialCode] = useState('+1')
  const [isPressed, setIsPressed] = useState(false);
  const [check, setCheck] = useState(false);
  const[showPassword,setShowPassword]=useState(false)


  const iconPressed=()=>{
    setShowPassword(!showPassword)

  }


  const handlePress = () => {
    setCheck(!check)
    setIsPressed(!isPressed)
  
    
  };
  // const eyePress=()=>{
  //   set
  // }


  const signIn = {
    "fullName": name,
    "phoneNumber": phoneno,
    "countryCode": dialCode,
    "password": passwordd,
  }
  const handleNavigation = () => {
   
    if( passwordValidation(name,phoneno,passwordd))
    {
   
 
      postSignUpApi()
      navigation.navigate('signinnumber')
    }
     else {
      Alert.alert('fill all deatail password minimum 8')
    }
  }

  const postSignUpApi = async () => {
    console.log()
    try{

     const response:Root= await (await axios.post('/api/v1/users/sign-up/mobile', signIn)).data
        //  .then(({ data }) => {
        //   if (data.status === "success") {
        //    console.log(data)
        //   }
        // }

      //  );                        
      console.log("signup mobile response",response.data.otp)
      setOtpPassword(response.data.otp)
    }
   catch (error) {
     console.log(error);

   }
  }

      






  const onClick = (item: itemProps) => {

    setDialCode(item.dial_code)

    setShowModal(false)

  }


  return (
    // <ScrollView style={{flex:1}}>
    <View style={styles.mainContainer}>

      <Head name={"SIGN UP"} name1='Catalyst' name2='CREATE YOUR ' name3='ACCOUNT' />


      <View style={styles.body}>
        <View style={{padding:15}}>



        <Text style={styles.text}>Full Name</Text>
        <TextInput style={styles.inputText2} onChangeText={useConx.setName}  />
        <Text style={styles.text}>Phone Number</Text>

        <View style={{ width: "100%", flexDirection: 'row', height: 50, backgroundColor: "white", marginVertical: 8 }} >
          <View style={{width:"25%",flexDirection:"row"}}>
          <Text style={{  color: "black", verticalAlign: 'middle',paddingLeft:15 }}>{dialCode}</Text>

          <Pressable style={{ backgroundColor: "white", justifyContent: "center",paddingLeft:5}} onPress={() => setShowModal(true)}>

            <AntDesign name="down" color="black" size={20} />
          </Pressable>
          </View>
          <View style={{width:"75%"}}>
          <TextInput style={styles.inputText1} onChangeText={useConx.setPhoneno} keyboardType="numeric"/>
          </View>

        </View>





        <Text style={styles.text}>Password</Text>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <TextInput style={styles.inputText3} onChangeText={(text) => useConx.setPassword(text)}  secureTextEntry={!showPassword} />
        <Pressable style={{backgroundColor:"white",height:50,justifyContent:"center",paddingRight:18,borderTopRightRadius:4,borderBottomEndRadius:4}} onPress={iconPressed} >
    
            
              <FontAwesome5 name={showPassword?"eye":"eye-slash"}  color="black" size={20} />

            
        
        </Pressable>

        </View>

    
          <View style={[styles.checkBoxContainer]}>
      
            <Pressable style={[styles.innerCheckBox,{backgroundColor: isPressed ? '#6A1B1E' : 'white'}]} onPress={handlePress}>
                {

                check ?
                <View>
                <AntDesign name="check" color="white" size={20}/>
                </View>
                 :null 
                  
                }
            </Pressable>
            <Text style={styles.checkBoxText}>I agree to the <Text style={{ color: "black", fontWeight: "bold", textDecorationLine: "underline" }}>Terms</Text> and <Text style={{ color: "black", fontWeight: "bold", textDecorationLine: "underline" }}>PrivacyPolicy</Text></Text>
          </View>

          <View style={{ height: '14%', width: "100%"}}>
            <Button name={"SignUp"} naviagate={handleNavigation} backgroundcolor={"#6A1B1E"} color={"white"} />
          </View>
          <View >
            <Text style={styles.para}>By agreeing to the above terms,you are consenting that your
              personal information will be collected,and stored,processed in the United States and the European
              Union on behalf of sparity,Properties,Inc</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:"center",paddingTop:50}}>
          <Text style={styles.signInText}>
            Existing User?    
          </Text>
            <Pressable style={{alignSelf:'center',}}onPress={handleNavigation}><Text style={{textDecorationLine:"underline",fontWeight:"bold",color:"black",}}> Sign In</Text></Pressable>
            </View>



        </View>
      </View >
      <Modal transparent={false}
        visible={showModal}>

        <View style={{ height: "100%", width: "100%" }}>
          <FlatList
            data={CountryCode}
            renderItem={({ item }) => <Pressable style={{ marginVertical:15 }} onPress={() => onClick(item)}>

              <Text style={{ fontSize: 15, fontWeight: "bold", color: "black",textAlign:"center" }}>{item.dial_code}</Text>


            
            </Pressable>}
            keyExtractor={item => item.code}
        
          />
    
        </View>


      </Modal>
    </View >
  //  </ScrollView>


  )
}




export default Createaccount
