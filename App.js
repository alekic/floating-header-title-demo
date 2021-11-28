import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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
      <SafeAreaProvider>
        <NavigationContainer>
          <OverflowMenuProvider spaceAboveMenu={30}>
            <AppNavigator />
          </OverflowMenuProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
