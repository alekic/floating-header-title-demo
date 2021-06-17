import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListHeader = React.forwardRef(({ subtitle, title }, ref) => (
  <View
    collapsable={false}
    ref={ref}
    style={styles.container}
  >
    <Text style={styles.title}>
      {title}
    </Text>
    {!!subtitle &&
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    }
  </View>
));

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 5
  },
  subtitle: {
    color: 'gray',
    fontSize: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default ListHeader;
