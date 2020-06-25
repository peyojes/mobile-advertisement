import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { AntDesign } from '@expo/vector-icons'; 

import TabBarIcon from '../components/TabBarIcon';
import CreateScreen from '../screens/CreateScreen';
import AdvertismentsScreen from '../screens/AdvertismentsScreen';
import { View } from 'react-native';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Advertisments"
        component={AdvertismentsScreen}
        options={{
          title: 'Advertisments',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home" />,
        }}
      />
      <BottomTab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          title: 'Create',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-add"/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Advertisments':
      return 'Advertisments';
    case 'Create':
      return 'Add new advertisments';
  }
}
