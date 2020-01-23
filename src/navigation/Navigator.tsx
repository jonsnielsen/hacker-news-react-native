import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { HomeScreen } from "../screens";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#F8F7F9"
      }
    }
  }
);

export default createAppContainer(AppNavigator);
