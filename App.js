import 'react-native-gesture-handler';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { OverflowMenuProvider } from 'react-navigation-header-buttons';
import { StatusBar } from 'expo-status-bar';

import AppNavigator from './AppNavigator';

enableScreens();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <OverflowMenuProvider spaceAboveMenu={30}>
          <AppNavigator />
        </OverflowMenuProvider>
      </NavigationContainer>
    </>
  );
}
