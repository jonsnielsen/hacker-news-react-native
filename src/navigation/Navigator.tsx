import React from "react";
import { HomeScreen } from "../screens";
import DrawerContent from "./drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";

const Drawer = createDrawerNavigator();


const RootNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={StackNavigator} />
    </Drawer.Navigator>
  );
};
export default RootNavigator;

// export default createAppContainer(AppNavigator);
