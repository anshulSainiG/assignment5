import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Task = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.innermaincontainer}>
        <View style={styles.inner_1}>
          <Text style={styles.taskHeadiing}>Task of the Day</Text>
          <View style={styles.icons}>
            <AntDesign name="user" color="black" size={20} />
            <AntDesign name="user" color="black" size={20} />
            <EvilIcons name="search" color="black" size={25} />
            <EvilIcons name="bell" color="black" size={25} />
            <AntDesign name="user" color="black" size={20} />
          </View>
        </View>
        <View style={styles.innerReviewContainer}>
          <Text style={styles.review}>You have two lessons to review</Text>
          <AntDesign name="user" color="black" size={15} />
        </View>
      </View>
      <View style={styles.boxes}>
        <View style={styles.box}>
          <Text style={styles.linemen}>Linemen</Text>
          <Text>Trackle</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.linemen}>Linemen</Text>
          <Text>Trackle</Text>
        </View>
      </View>
      <View style={styles.lineView}>
        <View style={styles.line} />
      </View>
      <View style={styles.boxes}>
        <View style={styles.box}>
          <Text style={styles.linemen}>Linemen</Text>
          <Text>Trackle</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.linemen}>Linemen</Text>
          <Text>Trackle</Text>
        </View>
      </View>
      <View style={styles.lineView}>
        <View style={styles.line} />
      </View>
    </View>
  );
};
export default Task;
const styles = StyleSheet.create({
  maincontainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F3F4F9',
  },
  innermaincontainer: {
    height: '8%',
    justifyContent: 'space-between',
    padding: 10,
  },
  icons: {
    flexDirection: 'row',
  },
  taskHeadiing: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  review: {
    paddingTop: 5,
  },
  innerReviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 40,
  },
  box: {
    height: 120,
    width: 150,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    paddingTop: 10,
    borderColor: '#6A1B1E',
  },
  boxes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  linemen: {
    fontWeight: 'bold',
  },
  line: {
    height: 2,
    width: '80%',
    color: 'black',
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  inner_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  lineView: {
    backgroundColor: 'red',
    height: '5%',
  },
});
