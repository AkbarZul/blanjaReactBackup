import React from 'react';
import {StyleSheet, View, TextInput, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Text from '../../../components/Text';

const ShippingAddress = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.Search}>
          <TextInput placeholder="Search" style={styles.form} />
          <Icon name="search" color="gray" size={30} style={styles.icon} />
        </View>
        <Text children="Shipping address" size={30} style={styles.title} />
        <View style={styles.card}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text children="Jane Doe" size={20} />
            <Text children="Change" color="red" size="l" />
          </View>
          <Text
            children="3 Newbridge Court Chino Hills, CA 91709, United States"
            size={17}
            type="Medium"
            style={styles.address}
          />
        </View>
        <View style={styles.card}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text children="Jane Doe" size={20} />
            <Text children="Change" color="red" size="l" />
          </View>
          <Text
            children="3 Newbridge Court Chino Hills, CA 91709, United States"
            size={17}
            type="Medium"
            style={styles.address}
          />
        </View>
        <View style={styles.card}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text children="Jane Doe" size={20} />
            <Text children="Change" color="red" size="l" />
          </View>
          <Text
            children="3 Newbridge Court Chino Hills, CA 91709, United States"
            size={17}
            type="Medium"
            style={styles.address}
          />
        </View>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DB3022"
          onPress={() => navigation.navigate('Adding Shipping Address')}
          style={styles.button}>
          <Text children="ADD NEW ADDRESS" size="l" />
        </TouchableHighlight>
      </View>
    </>
  );
};

export default ShippingAddress;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    height: '100%',
    paddingHorizontal: 20,
  },
  Search: {
    flexDirection: 'row',
    marginTop: 30,
    paddingHorizontal: 5,
  },
  form: {
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 50,
    borderWidth: 0,
    borderRadius: 23,
  },
  icon: {
    position: 'absolute',
    marginTop: 15,
    marginLeft: 20,
  },
  title: {
    paddingVertical: 20,
  },
  card: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  address: {
    textAlign: 'left',
    textAlignVertical: 'center',
    lineHeight: 21,
    marginRight: 140,
    letterSpacing: 0.15,
    paddingVertical: 15,
  },
  button: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
});
