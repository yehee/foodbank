import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/home/HomeScreen';
import DashboardScreen from './components/dashboard/DashboardScreen';
import MainPage from './components/Guest/MainPage';
import ProfilePage from './components/profile/ProfilePage';
import InventoryScreen from './components/inventory/InventoryScreen';
import LoginScreen from './components/login/LoginScreen';
import AchievementScreen from './components/achievements/AchievementScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Dashboard: { screen: DashboardScreen },
  GuestPage: { screen: MainPage},
  ProfilePage: { screen: ProfilePage},
  Inventory: { screen: InventoryScreen },
  Login: { screen: LoginScreen },
  Achievements: { screen: AchievementScreen }, 
});

const App = createAppContainer(MainNavigator);

export default App;
