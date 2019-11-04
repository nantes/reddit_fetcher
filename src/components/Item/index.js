import React from 'react';
import {Text, View, Image, Linking, TouchableHighlight} from 'react-native';
import Moment from 'moment';
import styles from './styles';
import {connect} from 'react-redux';
import {openItem} from '../../actions';

//TODO move to env
const baseURL = 'https://reddit.com';

//<TouchableHighlight onPress={() => Linking.openURL(url)}>

class Item extends React.Component {
  render() {
    const {item} = this.props;
    const url = baseURL + item.permalink;
    const dateAgo = Moment(item.created_utc * 1000).fromNow();
    const redditImage = item.thumbnail;
    <Text style={styles.dateAgo}> submitted {dateAgo}</Text>;
    return (
      <TouchableHighlight onPress={() => this.props.openItem(url)}>
        <View style={styles.mainContainer}>
          <Image source={{uri: redditImage}} style={styles.image} />
          <View style={styles.redditContainer}>
            <Text style={styles.dateAgo}> submitted {dateAgo}</Text>
            <Text style={styles.title}> {item.title}</Text>
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

function mapDispatchToProps(dispatch) {
  return {
    openItem: urlItem => dispatch(openItem(urlItem)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(Item);
