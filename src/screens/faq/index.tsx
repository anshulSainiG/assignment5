/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const Faq = () => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const Pressablehandler = () => {
    setIsPressed(!isPressed);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>FAQ</Text>
      </View>
      <Pressable style={styles.loremContainer} onPress={Pressablehandler}>
        <Text style={[styles.loremText, {color: isPressed ? 'black' : 'grey'}]}>
          Lorem ipsum dummy text
        </Text>
      </Pressable>
    </View>
  );
};
export default Faq;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F3F4F9',
  },
  heading: {
    height: '15%',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  headingText: {
    fontSize: 20,
  },
  loremContainer: {
    height: '10%',
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  loremText: {
    fontSize: 16,
  },
});
