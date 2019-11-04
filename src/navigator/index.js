import {createSwitchNavigator} from 'react-navigation';
import InitPage from '../pages/InitPage';
import WebViewPage from '../pages/InitPage';

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
