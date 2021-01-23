import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/EvilIcons';
import Text from '../../../components/Text';
import {useSelector} from 'react-redux';



const ShippingAddress = ({navigation}) => {
  const BASE_URL = 'http://192.168.1.3:9005';
  const [address, setAddress] = useState([]);
  const token = useSelector((state) => state.authReducer.token);

  // const getToken = async () => {
  //   try {
  //     console.log('ini');
  //     const token = await AsyncStorage.getItem('token');
  //     const fullName = await AsyncStorage.getItem('fullName');
  //     const email = await AsyncStorage.getItem('email');
  //     if ((token, fullName, email !== null)) {
  //       // value previously stored
  //       console.log('Token ProfilePage ', token);
  //       console.log('ProfilePage');
  //       return true;
  //     } else {
  //       console.log('token null');
  //       return false;
  //     }
  //   } catch (e) {
  //     // error reading value
  //     console.log(e);
  //   }
  // };
  // getToken();
  // console.log(`ini tester`);

  const getAddressUser = async () => {
    // const token =  AsyncStorage.getItem('token');
    await axios
      .get(BASE_URL + '/address', {
        headers: {
          'x-access-token': 'Bearer ' + token,
        },
      })
      .then((res) => {
        const address = res.data.data;
        console.log('KONTOL', address);
        setAddress(address);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAddressUser();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.Search}>
          <TextInput placeholder="Search" style={styles.form} />
          <Icon name="search" color="gray" size={30} style={styles.icon} />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 20, marginTop: 20}}>
          {/* <Text children="Shipping address" size={30} style={styles.title} /> */}
          {address.map(
            ({
              id_address,
              fullname,
              address,
              city,
              region,
              zip_code,
              country,
            }) => {
              return (
                <View style={styles.card}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      children={fullname}
                      size={20}
                      style={{fontWeight: 'bold'}}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Update Shipping Address', {
                          id: id_address,
                          Fullname: fullname,
                          Address: address,
                          City: city,
                          Region: region,
                          Zipcode: zip_code,
                          Country: country,
                        });
                      }}>
                      <Text children="Change" color="red" size="l" />
                    </TouchableOpacity>
                  </View>
                  <Text
                    children={address}
                    size={17}
                    type="Medium"
                    style={styles.address}
                  />
                  <View style={{flexDirection: 'row', marginBottom: 5}}>
                    <Text
                      children={`${city},`}
                      size={17}
                      type="Medium"
                      style={styles.address}
                    />
                    <Text
                      children={`${zip_code},`}
                      size={17}
                      type="Medium"
                      style={styles.address}
                    />
                    <Text
                      children={`${country}`}
                      size={17}
                      type="Medium"
                      style={styles.address}
                    />
                  </View>
                </View>
              );
            },
          )}

          {/* <View style={styles.card}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text children="Jane Doe" size={20} />
              <Text children="Change" color="red" size="l" />
            </View>
            <Text
              children="3 Newbridge Court Chino Hills, CA 91709, United States"
              size={17}
              type="Medium"
              style={styles.address}
            />
          </View> */}
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DB3022"
            onPress={() => navigation.navigate('Adding Shipping Address')}
            style={styles.button}>
            <Text children="ADD NEW ADDRESS" size="l" />
          </TouchableHighlight>
        </ScrollView>
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
    paddingHorizontal: 15,
  },
  address: {
    textAlign: 'left',
    textAlignVertical: 'center',
    lineHeight: 21,
    marginRight: 5,
    letterSpacing: 0.15,
    // paddingVertical: 10,
    marginTop: 10,
  },
  button: {
    borderRadius: 50,
    borderWidth: 1,
    borderBottomWidth: 2,
    borderColor: 'black',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
});
