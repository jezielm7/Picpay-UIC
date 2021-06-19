/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';

import Home from '../screens/Home';
import Wallet from '../screens/Wallet';
import Pay from '../screens/Pay';

import PayButton from '../components/PayButton';

const TabRouter = () => {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator
      tabBarOptions={{
        style: {
          height: 60,
          borderTopWidth: 0,
          backgroundColor: '#131418',
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 24,
          height: 24,
        },
        labelStyle: {
          marginTop: 8,
          fontSize: 12,
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
      }}
    >
      <Screen name="Home" component={Home} options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <AntIcon
              name="home"
              size={size}
              color={focused ? '#fff' : '#92929c'}
            />
          )
        }
      }} />

      <Screen name="Wallet" component={Wallet} options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <AntIcon
              name="creditcard"
              size={size}
              color={focused ? '#fff' : '#92929c'}
            />
          )
        }
      }} />

      <Screen name="Pay" component={Pay} options={{
        tabBarLabel: '',
        tabBarIcon: ({ focused }) => {
          return (
            <PayButton onPress={() => { }} focused={focused} />
          )
        }
      }} />

      <Screen name="Notifications" component={Home} options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <Icon
              name="notifications"
              size={size}
              color={focused ? '#fff' : '#92929c'}
            />
          )
        }
      }} />

      <Screen name="Settings" component={Wallet} options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <AntIcon
              name="setting"
              size={size}
              color={focused ? '#fff' : '#92929c'}
            />
          )
        }
      }} />
    </Navigator>
  );
};

export default TabRouter;
