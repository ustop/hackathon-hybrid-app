import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Fonts, Colors } from '../constants';

export default function AddonsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Addons Screen Here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
