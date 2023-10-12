import {Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../button/styles';

type buttonProps = {
  name: string;
  backgroundcolor: string;
  color: string;
  naviagate: () => void;
};
const Button = (props: buttonProps) => {
  // const PressHandler = () =>{
  //     navigation.navigate('createaccount');
  // // }
  const {name, backgroundcolor, color, naviagate} = props;
  return (
    <View style={styles.btn}>
      <TouchableOpacity
        style={[styles.logInBtn, {backgroundColor: backgroundcolor}]}
        onPress={naviagate}>
        <Text style={[styles.logInText, {color: color}]}>{name}</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={ onboardingstyles.signupbtn}>
                <Text style={ onboardingstyles.signuptext}>{name1}</Text>
            </TouchableOpacity> */}
    </View>
  );
};
export default Button;
