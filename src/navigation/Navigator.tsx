import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { HomeScreen, ProfileScreen } from "../screens";

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
});

export default createAppContainer(AppNavigator);
