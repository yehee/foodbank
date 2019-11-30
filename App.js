import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/home/HomeScreen';
import DashboardScreen from './components/dashboard/DashboardScreen';
import InventoryScreen from './components/inventory/InventoryScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Dashboard: { screen: DashboardScreen },
  Inventory: { screen: InventoryScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
