import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpStackParamList} from '../../navigator/naviagtion';

type LogInSignUpProps = NativeStackScreenProps<
  SignUpStackParamList,
  'splashScreen'
>;

const Splash: React.FC<LogInSignUpProps> = props => {
  const {navigation} = props;
  const pressHandler = () => {
    navigation.navigate('onBoarding');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pressHandler}>
        <Image source={require('../../assests/image/splash-logo.webp')} />
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
