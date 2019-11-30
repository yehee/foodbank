import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/home/HomeScreen';
import DashboardScreen from './components/dashboard/DashboardScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Dashboard: { screen: DashboardScreen },
});

const App = createAppContainer(MainNavigator);

export default App;
