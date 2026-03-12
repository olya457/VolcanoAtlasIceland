import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './navTypes';
import MainTabNavigator from './MainTabNavigator';

import TrailLaunchScreen from '../screens/TrailLaunchScreen';
import PathIntroScreen from '../screens/PathIntroScreen';
import PlaceInsightScreen from '../screens/PlaceInsightScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TrailLaunch"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="TrailLaunch" component={TrailLaunchScreen} />
        <Stack.Screen name="PathIntro" component={PathIntroScreen} />
        <Stack.Screen name="MainTabs" component={MainTabNavigator} />
        <Stack.Screen name="PlaceInsight" component={PlaceInsightScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}