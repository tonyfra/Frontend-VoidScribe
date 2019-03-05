import { createSwitchNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import MainScreen from './Screens/MainScreen';
import ReadScreen from './Screens/ReadScreen';
import PromptScreen from './Screens/PromptScreen';
import SplashScreen from './Screens/SplashScreen'
import SelectNameCatScreen from './Screens/SelectNameCatScreen';


const MyAppNavigator = createSwitchNavigator(
  {
    MainScreen,
    ReadScreen,
    SelectNameCatScreen,
    PromptScreen,
    SplashScreen
  },
  {
    initialRouteName: 'SplashScreen'
  }

);
const AppContainer = createAppContainer(MyAppNavigator);
export default AppContainer;

