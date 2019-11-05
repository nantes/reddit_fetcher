import React from 'react';
import {connect} from 'react-redux';

import WebViewItem from '../components/webViewItem';

class WebViewPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <WebViewItem url={this.props.urlItem} />;
  }
}

function mapStateToProps(state) {
  return {
    urlItem: state.urlItem,
  };
}

export default connect(
  mapStateToProps,
  null,
)(WebViewPage);
