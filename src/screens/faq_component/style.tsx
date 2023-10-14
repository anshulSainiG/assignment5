import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F3F4F9',
  },
  itemContainer: {
    marginVertical: 10,
    paddingVertical: 21,
    backgroundColor: 'white',
    borderRadius: 8,
    width: '90%',
    marginHorizontal: 20,
    paddingHorizontal: 16,
  },
  itemTouchable: {
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContent: {
    marginTop: 10,
    fontSize: 14,
  },
  headingText: {
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: 20,
  },
  innerView: {
    marginVertical: 20,
  },
});
