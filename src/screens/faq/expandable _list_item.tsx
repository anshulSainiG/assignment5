/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './style';

type Item = {
  id: string;
  title: string;
  content: string;
};
type Props = {
  item: Item;
};

const ExpandableListItem: React.FC<Props> = ({item}) => {
  const [expanded, setExpanded] = useState(false);
  const [icon, setIcon] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
    setIcon(!icon);
  };

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={toggleExpand} style={styles.itemTouchable}>
        <Text
          style={[styles.itemTitle, {color: expanded ? '#000000' : '#FF8548'}]}>
          {item.title}
        </Text>
        <AntDesign name={icon ? 'down' : 'right'} color="black" size={20} />
      </TouchableOpacity>
      {expanded && (
        <Text
          style={[
            styles.itemContent,
            {color: expanded ? '#FF8548' : '#000000'},
          ]}>
          {item.content}
        </Text>
      )}
    </View>
  );
};
export default ExpandableListItem;
