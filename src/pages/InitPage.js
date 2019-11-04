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

class InitPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.isLoading ? (
      <View>
        <ActivityIndicator size="large" color="black" />
        <Text>Loading...</Text>
      </View>
    ) : (
      <View>
        <View>
          <Sort />
        </View>
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
    this.props.fetchReddit()
  }
}

function mapStateToProps(state) {
  return {
    reddit: state.reddit,
    isLoading: state.isLoading,
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
