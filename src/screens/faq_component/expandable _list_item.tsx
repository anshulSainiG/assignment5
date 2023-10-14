/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './style';
import {BLACK_COLOR} from './color';
import {GREY_COLOR} from './color';

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
          style={[
            styles.itemTitle,
            {color: expanded ? BLACK_COLOR : GREY_COLOR},
          ]}>
          {item.title}
        </Text>
        <AntDesign name={icon ? 'down' : 'right'} color="#6A1B1E" size={20} />
      </TouchableOpacity>
      {expanded && (
        <Text
          style={[
            styles.itemContent,
            {color: expanded ? GREY_COLOR : BLACK_COLOR},
          ]}>
          {item.content}
        </Text>
      )}
    </View>
  );
};
export default ExpandableListItem;
