import React from 'react';
import {
  FlatList,
  ActivityIndicator,
  Text,
  RefreshControl,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchReddit} from '../actions';

import Item from '../components/Item';
import Sort from '../components/sort';
import WebViewItem from '../components/webViewItem';
class InitPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Sort />
        {this.props.reddit.length > 0 && (
          <FlatList
            data={this.props.reddit}
            renderItem={({item}) => <Item item={item.data} />}
            keyExtractor={item => item.data.id}
            refreshControl={
              <RefreshControl
                refreshing={this.props.loading}
                onRefresh={this.props.fetchReddit}
              />
            }
          />
        )}
      </View>
    );
  }

  componentDidMount() {
    this.props.fetchReddit();
  }
}

function mapStateToProps(state) {
  return {
    reddit: state.sortedReddit,
    isLoading: state.isLoading,
    urlItem: state.urlItem,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchReddit: () => dispatch(fetchReddit()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InitPage);
