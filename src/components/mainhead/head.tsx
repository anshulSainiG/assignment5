import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
type headProps = {
    name : string,
    name1: string,
    name2: string,
    name3: string
    // height:string
    // naviagate:()=>void
}
const Head = (props : headProps) => {
        // const PressHandler = () =>{        
        //     navigation.navigate('createaccount');
        // // }
    const {name,name1,name2,name3} = props;


    return (
            <View style={styles.container}>
            <View >
                <Text style={styles.lighttext}>{name}</Text>
                </View>
            <View style={styles.mainheading}>
                <Text style={styles.maintext}>{name1}</Text>
            </View>
            <View style={styles.account}>
                <Text style={styles.create}>{name2}</Text>
                <Text style={styles.create}>{name3}</Text>
            </View>
            </View>
            
    )
}
export default Head

const styles = StyleSheet.create({
   
    container:{
        height:"28%",
        backgroundColor:"white"
    
    },
    lighttext:{
        fontSize:90,
        color:"#6A1B1E",
        fontWeight:"bold",
        opacity:0.1,
        alignSelf:"center",
        paddingTop:50,
//    backgroundColor:"white",
        paddingLeft:30,
        
        position:'absolute',
        zIndex:-1,
        right:0

    },
    mainheading: {
        // backgroundColor:"blue",
        height:"30%",
        justifyContent: "flex-end",
        // position:"absolute",
        

    },
    maintext: {
        fontSize: 30,
        color: "#6A1B1E",
        paddingLeft: 19,
        // paddingTop: 40,
        fontWeight: "bold",

    },
    account: {

        //  backgroundColor:"red",

        // justifyContent: "center",
        // position:"absolute",
        paddingTop:60,
        



    },
    create: {
        color: "#6A1B1E",
        paddingLeft: 18,
        fontWeight: "bold",
        fontSize: 28
    },
})