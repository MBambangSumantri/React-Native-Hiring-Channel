import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import GettingStarted from './screens/GettingStarted';
import Login from './screens/Login';
import Home from './screens/Home';
import Register from './screens/Register';

const MainNavigator = createStackNavigator(
  {
    GettingStarted,
    Login,
    Register,
    Home,
  },
  {
    headerMode: 'none',
    initialRouteKey: 'GettingStarted',
  },
);

export default createAppContainer(MainNavigator);
