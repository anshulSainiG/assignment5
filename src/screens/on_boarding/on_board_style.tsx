import { StyleSheet } from "react-native"
import { useColorScheme } from "react-native"

export const OnBoardingStyles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        backgroundColor:"white",

    },
    mainText: {
        height: "7%",
        // backgroundColor:"red",
        justifyContent: "flex-end"




    },
    name: {
        fontSize: 24,
        color: "#6A1B1E",
        paddingLeft: 19,
        fontWeight:"bold",

    },
    image: {

        alignItems: "center",
        height: "40%",
        justifyContent: "flex-end",
        // backgroundColor:"blue"

    },

    textContainer: {
        // marginTop: 40,
        paddingLeft: 25,
        height: "38%",
        // backgroundColor:"blue",
        justifyContent: "center"




    },
    strategy: {
        color: "#6A1B1E",
        fontSize: 40,
        fontFamily: "Geologica",
        fontWeight: "bold"

    },
    yourGame: {
        fontSize: 35,
        color: "#333333"

    },
    para: {
        paddingTop: 10,
        color: "#150000"

    },
    btn: {
        flex:1,

        // justifyContent:"space-evenly"
        // justifyContent:'space-around'
        justifyContent:'space-evenly',
        // width:"90%"

        

    },

    logInBtn: {
        width: "90%",
        backgroundColor: "#6A1B1E",
        borderRadius: 4,
        paddingVertical: 10,
        justifyContent: "center",
        alignSelf:"center",
        borderColor:"#6A1B1E",
        borderWidth:2
    

    },

    logInText: {
        alignSelf: "center",
        // color: "white",

    },

    // signupbtn: {
    //     borderRadius: 4,
    //     width: "90%",
    //     borderColor: "#6A1B1E",
    //     borderWidth: 2,
    //     paddingVertical: 10,
    //     justifyContent: "center",
    //     alignSelf:"center"
    

    // },
    // signuptext: {
    //     textAlign: "center",
    //     color: "#6A1B1E",
    // },
    buttonColor:{
        backgroundColor:"white"
    }

})
