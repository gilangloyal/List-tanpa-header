/**
  Gus Nando
  07/03/2018
 */
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
// import HitungVolumeBalok from './src/HitungVolumeBalok';
import Header from './src/Header';
import Footer from './src/Footer';
import Sales from './src/Sales';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <Sales />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#2196F3'
  }
})

AppRegistry.registerComponent('GusNando', () => App);
