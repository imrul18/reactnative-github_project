import React from "react";
import { ImageBackground } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "./component/Icon";

import backgroundImage from "./image/background.jpg";

import AllUsers from "./screens/AllUsers";
import FavUsers from "./screens/FavUsers";
import Settings from "./screens/Settings";
import UserDetails from "./component/UserDetails";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AllUserNav = () => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={{ width: "100%", flex: 1 }}
      blurRadius={5}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="All Users"
          component={AllUsers}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="userdetails"
          component={UserDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </ImageBackground>
  );
};

const AppNavigation = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="All Users"
        component={AllUserNav}
        options={{
          tabBarIcon: () => <Icon name="md-people" color="black" />,
        }}
      />
      <Tab.Screen
        name="Favourite Users"
        component={FavUsers}
        options={{
          tabBarIcon: () => <Icon name="md-heart" color="black" />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: () => <Icon name="md-settings" color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
