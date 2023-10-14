import React from 'react';
import {FlatList} from 'react-native';
import ExpandableListItem from './expandable _list_item';

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
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ExpandableList;
