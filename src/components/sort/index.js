import React from 'react';
import {Picker} from 'react-native';
import {connect} from 'react-redux';
import {sortReddit} from '../../actions';

class Sort extends React.Component {
  constructor() {
    super();
    this.state = {
      sortValue: 'new',
    };
  }
  sortHandler = value => {
    this.setState({sortValue: value});
    this.props.sortReddit(value);
  };

  render() {
    return (
      <Picker
        onValueChange={this.sortHandler}
        selectedValue={this.state.sortValue}>
        <Picker.Item label="New" value="new" />
        <Picker.Item label="Top" value="top" />
        <Picker.Item label="Hot" value="hot" />
        <Picker.Item label="Controversial" value="controversial" />
      </Picker>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sortReddit: category => dispatch(sortReddit(category)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Sort);
