import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from "../../components/mainhead/style"
type headProps = {
    signIn: string,
    catalyst: string,
    signInWith: string,
    mobileNumber: string,
}
const Head = (props: headProps) => {
    const { signIn, catalyst, signInWith, mobileNumber } = props;
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.lighttext}>{signIn}</Text>
            </View>
            <View style={styles.mainheading}>
                <Text style={styles.maintext}>{catalyst}</Text>
            </View>
            <View style={styles.account}>
                <Text style={styles.create}>{signInWith}</Text>
                <Text style={styles.create}>{mobileNumber}</Text>
            </View>
        </View>
    )
}
export default Head





