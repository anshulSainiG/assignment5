import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
   
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