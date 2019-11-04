import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class WebViewItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <WebView source={{uri: this.props.url}} style={{marginTop: 20}} />;
  }
}

export default WebViewItem;
