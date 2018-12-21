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
import { NavigationActions } from 'react-navigation';

export default class Launch extends React.Component {

  constructor (props) {
    super(props);
    this.next = this.next.bind(this);
    this.state = {page: 1};
    console.log(this.state);
  }

  next () {
    this.setState({page: this.state.page + 1});
  }

  prev () {
    this.setState({page: this.state.page - 1});
  }

  render () {
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
              <Text size={30} bold white style={styles.title}>Launch screen</Text>
            </View>
            <View style={[styles.section, styles.sectionLarge]}>
              <Text color="#19e7f7" hCenter size={15} style={styles.description}>
                Launch screen with plan and addon selection and submit. {this.state.page }
              </Text>
              <Button
                primary
                caption="Choose Plan"
                onPress={this.next}
              />
            </View>
          </ImageBackground>
      </View>
    );
  }
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
