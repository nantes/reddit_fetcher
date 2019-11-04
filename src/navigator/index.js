import InitPage from '../pages/InitPage';
import WebViewPage from '../pages/WebViewPage';

import {createStackNavigator} from 'react-navigation-stack';
const RootStack = createStackNavigator(
  {
    Home: {screen: InitPage},
    WebUrl: {screen: WebViewPage},
  },
  {
    initialRouteName: 'Home',
  },
);
export default RootStack;
