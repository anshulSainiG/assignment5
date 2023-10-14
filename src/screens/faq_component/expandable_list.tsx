import React from 'react';
import {FlatList, Text} from 'react-native';
import ExpandableListItem from './expandable _list_item';
import {View} from 'react-native';
import {styles} from './style';

type Item = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  data: Item[];
};

const ExpandableList: React.FC<Props> = ({data}) => {
  const renderItem = ({item}: {item: Item}) => {
    return <ExpandableListItem item={item} />;
  };

  return (
    <View>
      <Text style={styles.headingText}>FAQ</Text>
      <View style={styles.innerView}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default ExpandableList;
