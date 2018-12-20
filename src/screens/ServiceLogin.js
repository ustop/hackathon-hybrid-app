import React from 'react';
import Layout from '../constants/Layout';
import {
  StyleSheet,
  View,
  Platform,
  Image,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from 'react-native';

import { Fonts, Colors } from '../constants';
import Button from '../components/Button';
import {
  Text,
  Title,
} from '../components/StyledText';

export default function ServiceLogin({ isExtended, setIsExtended }, props) {
  const rnsUrl = 'https://reactnativestarter.com';
  const handleClick = () => {
    Linking.canOpenURL(rnsUrl).then((supported) => {
      if (supported) {
        Linking.openURL(rnsUrl);
      } else {
        console.log(`Don't know how to open URI: ${rnsUrl}`);
      }
    });
  };

  return (
    <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/background.png')}
          style={styles.bgImage}
          resizeMode="cover"
        >
          <View style={styles.section}>
            <Text size={20} white>Optus</Text>
          </View>
          <View style={styles.section}>
            <Text size={30} bold white style={styles.title}>Service login</Text>
          </View>
          <View style={[styles.section, styles.sectionLarge]}>
            <Text color="#19e7f7" hCenter size={15} style={styles.description}>Image banner with link to register interest.</Text>
          </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'stretch'
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: Fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
});
