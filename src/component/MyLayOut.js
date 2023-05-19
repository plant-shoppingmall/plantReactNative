import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const Header = () => {
  return (
    <View style={[styles.container, styles.header]}>
      <Text>Header</Text>
    </View>
  );
};
export const Contents = () => {
  return (
    <View style={[styles.container, styles.Contents]}>
      <Text>Contents</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'yellow',
  },
  Contents: {
    width: '100%',
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
