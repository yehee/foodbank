import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/home/HomeScreen';
import DashboardScreen from './components/dashboard/DashboardScreen';
import MainPage from './components/Guest/MainPage';
import ProfilePage from './components/profile/ProfilePage';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Dashboard: { screen: DashboardScreen },
  GuestPage: { screen: MainPage},
  ProfilePage: { screen: ProfilePage}
});

const App = createAppContainer(MainNavigator);

export default App;
