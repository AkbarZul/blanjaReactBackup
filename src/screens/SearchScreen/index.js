import React, {Component} from 'react';
import {StyleSheet, View, TextInput, StatusBar} from 'react-native';
// import FormInput from '../../components/FormInput';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#E5E5E5" />
        <View style={styles.Search}>
          <TextInput placeholder="Search" style={styles.form} />
          <Icon name="search" color="gray" size={30} style={styles.icon} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    height: '100%',
  },
  Search: {
    flexDirection: 'row',
    marginTop: 50,
    paddingHorizontal: 20,
  },
  form: {
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 40,
    borderWidth: 0,
    borderRadius: 23,
  },
  icon: {
    position: 'absolute',
    marginTop: 15,
    marginLeft: 25,
  },
});
