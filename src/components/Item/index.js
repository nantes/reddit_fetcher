import React from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import Moment from 'moment';
import styles from './styles';

//TODO move to env
const baseURL = 'https://reddit.com';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {item} = this.props;
    const url = baseURL + item.permalink;
    const dateAgo = Moment(item.created_utc * 1000).fromNow();
    const redditImage = item.thumbnail;
    <Text style={styles.dateAgo}> submitted {dateAgo}</Text>;
    return (
      <TouchableHighlight onPress={() => this.props.openUrl(url)}>
        <View style={styles.mainContainer}>
          <Image source={{uri: redditImage}} style={styles.image} />
          <View style={styles.redditContainer}>
            <Text style={styles.dateAgo}> submitted {dateAgo}</Text>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
            <View style={styles.redditInfo}>
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

export default Item;
