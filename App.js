import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/home/HomeScreen';
import DashboardScreen from './components/dashboard/DashboardScreen';
<<<<<<< HEAD
import InventoryScreen from './components/inventory/InventoryScreen';
=======
import LoginScreen from './components/login/LoginScreen';
>>>>>>> 5480b2193eb89650e4bd159d837be55ec403ecdf

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Dashboard: { screen: DashboardScreen },
<<<<<<< HEAD
  Inventory: { screen: InventoryScreen }
=======
  Login: { screen: LoginScreen },
>>>>>>> 5480b2193eb89650e4bd159d837be55ec403ecdf
});

const App = createAppContainer(MainNavigator);

export default App;
