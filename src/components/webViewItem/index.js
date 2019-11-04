import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class WebViewItem extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default WebViewItem;
