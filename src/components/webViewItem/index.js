import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import styles from './styles';

class WebViewItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WebView source={{uri: this.props.url}} style={styles.mainCointainer} />
    );
  }
}

export default WebViewItem;
