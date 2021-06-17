import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';

export default function ListItem({ title, onPress }) {

  const Touchable = Platform.select({
    android: TouchableNativeFeedback,
    default: TouchableOpacity
  });

  return (
    <Touchable onPress={onPress}>
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  }
});
