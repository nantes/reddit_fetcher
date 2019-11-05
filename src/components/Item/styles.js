import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  redditContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  dateAgo: {
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  redditInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 5,
    backgroundColor: 'grey',
  },
});
