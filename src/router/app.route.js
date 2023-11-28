import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home';
import ConversorScreen from '../screens/conversor';
import DashboardScreen from '../screens/dashboard';
import ProfileScreen from '../screens/profile';

import { FontAwesome5 } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopWidth: 0
        }
      }}>
        <Screen 
          name='Home' 
          component={HomeScreen} 
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <FontAwesome5 name="home" size={24} color='#f50d41' />
            }
          }}
        />
        
        <Screen 
          name='Conversor' 
          component={ConversorScreen} 
          options={{
            headerShown: false,
            tabBarIcon: () =>{
              return <FontAwesome5 name="coins" size={24} color='#f50d41' />
            }
          }}
        />

        <Screen 
          name='Dashboard' 
          component={DashboardScreen} 
          options={{
            headerShown: false,
            tabBarIcon: () =>{
              return <FontAwesome5 name="chart-line" size={24} color='#f50d41' />
            }
          }}
          
        />

        <Screen 
          name='Profile' 
          component={ProfileScreen} 
          options={{
            headerShown: false,
            tabBarIcon: () =>{
              return <FontAwesome5 name="users" size={24} color='#f50d41' />
            }
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}
