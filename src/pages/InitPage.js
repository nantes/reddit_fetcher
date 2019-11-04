import React from 'react';
import {
  FlatList,
  ActivityIndicator,
  Text,
  RefreshControl,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchReddit, openItem} from '../actions';

import Item from '../components/Item';
import Sort from '../components/sort';

class InitPage extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
  }

  openUrl = url => {
    this.props.OpenItem(url);
    this.navigate('WebUrl');
  };

  render() {
    return (
      <View>
        <Sort />
        {this.props.reddit.length > 0 && (
          <FlatList
            data={this.props.reddit}
            renderItem={({item}) => (
              <Item item={item.data} openUrl={this.openUrl} />
            )}
            keyExtractor={item => item.data.id}
            refreshControl={
              <RefreshControl
                refreshing={this.props.isLoading}
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
    OpenItem: url => dispatch(openItem(url)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InitPage);
