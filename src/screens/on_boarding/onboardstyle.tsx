import { StyleSheet } from "react-native"
import { useColorScheme } from "react-native"

export const OnBoardingStyles = StyleSheet.create({
    maincontainer: {
        width: "100%",
        height: "100%",
        backgroundColor:"white",

    },
    maintext: {
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

    textcontainer: {
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
    yourgame: {
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

    loginbtn: {
        width: "90%",
        backgroundColor: "#6A1B1E",
        borderRadius: 4,
        paddingVertical: 10,
        justifyContent: "center",
        alignSelf:"center",
        borderColor:"#6A1B1E",
        borderWidth:2
    

    },

    logintext: {
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
    buttoncolor:{
        backgroundColor:"white"
    }

})
