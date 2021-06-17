import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Divider, HiddenItem, Item, OverflowMenu } from 'react-navigation-header-buttons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { MaterialHeaderButtons } from './components/HeaderButtons';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: styles.card
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => <MenuButton />,
          headerRight: () => <HeaderRight />
        }}
      />
    </Stack.Navigator>
  );
}

function HeaderRight() {
  return (
    <MaterialHeaderButtons>
      <Item
        iconName="search"
        title="Search"
      />
      <Item
        iconName="filter-list"
        title="Filter"
      />
      <OverflowMenu
        OverflowIcon={
          <MaterialIcons
            name="more-vert"
            style={styles.overflowMenuIcon}
          />
        }
      >
        <HiddenItem title="Settings..." />
        <HiddenItem title="Sort..." />
        <Divider />
        <HiddenItem title="Close" />
      </OverflowMenu>
    </MaterialHeaderButtons>
  );
}

function MenuButton() {
  return (
    <MaterialHeaderButtons left>
      <Item
        iconName="menu"
        title="Menu"
      />
    </MaterialHeaderButtons>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1
  },
  overflowMenuIcon: {
    fontSize: 24,
    marginHorizontal: Platform.select({
      web: 11,
      default: 0
    })
  }
});
