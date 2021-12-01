import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export default function withFloatingHeader(
  WrappedListComponent,
  ListHeaderComponent
) {
  return function (props) {
    const navigation = useNavigation();
    const listHeaderRef = useRef(null);
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

    const handleScroll = (event) => {
      const { nativeEvent } = event;
      const yOffset = nativeEvent.contentOffset.y;

      listHeaderRef.current.measureInWindow((x, y, width, height) => {
        if (listHeaderVisible && yOffset > height) {
          setListHeaderVisible(false);
        } else if (!listHeaderVisible && yOffset <= height) {
          setListHeaderVisible(true);
        }
      });

      if (props.onScroll) {
        props.onScroll(event);
      }
    };

    return (
      <WrappedListComponent
        {...props}
        ListHeaderComponent={
          <ListHeaderComponent ref={listHeaderRef} />
        }
        onScroll={handleScroll}
      />
    );
  };
}
