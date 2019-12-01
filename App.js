import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/home/HomeScreen';
import DashboardScreen from './components/dashboard/DashboardScreen';
import MainPage from './components/Guest/MainPage';
import ProfilePage from './components/profile/ProfilePage';
import InventoryScreen from './components/inventory/InventoryScreen';
import LoginScreen from './components/login/LoginScreen';
import LeaderboardScreen from './components/leaderboard/LeaderboardScreen';
import AchievementScreen from './components/achievements/AchievementScreen';
import BottomNavigationTabs from './components/bottomNavigationTabs/BottomNavigationTabs';

const MainNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen },
  Dashboard: { screen: DashboardScreen },
  GuestPage: { screen: MainPage },
  Profile: { screen: ProfilePage },
  Inventory: { screen: InventoryScreen },
  Leaderboard: { screen: LeaderboardScreen },
  Achievements: { screen: AchievementScreen },
  BottomNavigationTabs: { screen: BottomNavigationTabs },
});

const App = createAppContainer(MainNavigator);

export default App;
