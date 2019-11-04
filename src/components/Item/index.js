import React from 'react';
import {Text, View, Image, Linking, TouchableHighlight} from 'react-native';
import Moment from 'moment';

//TODO move to env
const baseURL = 'https://reddit.com';

export default class Item extends React.Component {
  render() {
    const {item} = this.props;
    const url = baseURL + item.permalink;
    const dateAgo = Moment(item.created_utc * 1000).fromNow();
    const redditImage = item.thumbnail;
    <Text style={styles.dateAgo}> submitted {dateAgo}</Text>;
    return (
      <TouchableHighlight onPress={() => Linking.openURL(url)}>
        <View>
          <Image source={{uri: redditImage}} />
          <View>
            <Text> submitted {dateAgo}</Text>
            <Text> {item.title}</Text>
            <View>
              <Text>by {item.author}</Text>
              <Text>Score: {item.score}</Text>
              <Text>Comments: {item.num_comments}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
