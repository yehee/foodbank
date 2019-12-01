import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/home/HomeScreen';
import DashboardScreen from './components/dashboard/DashboardScreen';
<<<<<<< HEAD
import MainPage from './components/Guest/MainPage';
import ProfilePage from './components/profile/ProfilePage';
=======
import InventoryScreen from './components/inventory/InventoryScreen';
import LoginScreen from './components/login/LoginScreen';
>>>>>>> 2ced090d308291d563a7ef1768a7dfa5aff25905

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Dashboard: { screen: DashboardScreen },
<<<<<<< HEAD
  GuestPage: { screen: MainPage},
  ProfilePage: { screen: ProfilePage}
=======
  Inventory: { screen: InventoryScreen },
  Login: { screen: LoginScreen },
>>>>>>> 2ced090d308291d563a7ef1768a7dfa5aff25905
});

const App = createAppContainer(MainNavigator);

export default App;
