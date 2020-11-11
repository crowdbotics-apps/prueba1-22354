import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen49171375Navigator from '../features/BlankScreen49171375/navigator';
import Maps168521Navigator from '../features/Maps168521/navigator';
import Additem168520Navigator from '../features/Additem168520/navigator';
import Maps168516Navigator from '../features/Maps168516/navigator';
import UserProfile168512Navigator from '../features/UserProfile168512/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen49171375: { screen: BlankScreen49171375Navigator },
Maps168521: { screen: Maps168521Navigator },
Additem168520: { screen: Additem168520Navigator },
Maps168516: { screen: Maps168516Navigator },
UserProfile168512: { screen: UserProfile168512Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
