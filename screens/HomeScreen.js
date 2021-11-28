import React, { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ListHeader from '../components/ListHeader';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';

const data = [
  { id: 1, name: 'Cristiano Ronaldo' },
  { id: 2, name: 'Diogo Jota' },
  { id: 3, name: 'Rui Patricio' },
  { id: 4, name: 'Raphael Guerreiro' },
  { id: 5, name: 'Ruben Dias' },
  { id: 6, name: 'Andre Silva' },
  { id: 7, name: 'Bruno Fernandes' },
  { id: 8, name: 'Bernardo Silva' },
  { id: 9, name: 'Joao Felix' },
  { id: 10, name: 'Jose Fonte' },
  { id: 11, name: 'Harry Kane' },
  { id: 12, name: 'Jordan Henderson' },
  { id: 13, name: 'Mason Mount' },
  { id: 14, name: 'Raheem Sterling' },
  { id: 15, name: 'Phil Foden' },
  { id: 16, name: 'Luke Shaw' },
  { id: 17, name: 'Kieran Trippier' },
  { id: 18, name: 'Harry Maguire' },
  { id: 19, name: 'Paul Pogba' },
  { id: 20, name: 'Karim Benzema' },
  { id: 21, name: 'Thomas Muller' },
  { id: 22, name: 'Leon Goretzka' },
  { id: 23, name: 'Leroy Sane' },
  { id: 24, name: 'Manuel Neuer' },
  { id: 25, name: 'Joshua Kimmich' }
];

const keyExtractor = item => item.id.toString();

const renderItem = ({ item }) => (
  <ListItem title={item.name} />
);

export default function HomeScreen({ navigation }) {
  const headerRef = useRef(null);
  const [listHeaderVisible, setListHeaderVisible] = useState(true);
  const [headerTitleOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(headerTitleOpacity, {
      duration: 200,
      toValue: listHeaderVisible ? 0 : 1,
      useNativeDriver: true
    }).start();
  }, [
    headerTitleOpacity,
    listHeaderVisible
  ]);

  useEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        opacity: headerTitleOpacity.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1]
        })
      }
    });
  }, [
    headerTitleOpacity,
    navigation
  ]);

  const handleScroll = ({ nativeEvent }) => {
    const yOffset = nativeEvent.contentOffset.y;

    headerRef.current.measureInWindow((x, y, width, height) => {
      if (listHeaderVisible && yOffset > height) {
        setListHeaderVisible(false);
      } else if (!listHeaderVisible && yOffset <= height) {
        setListHeaderVisible(true);
      }
    });
  };

  const renderListHeader = () => (
    <ListHeader
      ref={headerRef}
      subtitle="Subtitle"
      title="Home"
    />
  );

  return (
    <SafeAreaView 
      edges={['bottom', 'left', 'right']}
      style={styles.container}
    >
      <FlatList
        data={data}
        ItemSeparatorComponent={ListItemSeparator}
        keyExtractor={keyExtractor}
        ListHeaderComponent={renderListHeader}
        onScroll={handleScroll}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
