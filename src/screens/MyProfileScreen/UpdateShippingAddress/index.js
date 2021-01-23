import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Text from '../../../components/Text';
import {ButtonSubmit} from '../../../components/index';
import {Picker} from '@react-native-picker/picker';
import FormInput from 'react-native-outline-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const UpdateShippingAddress = ({navigation, route}) => {
    const BASE_URL = 'http://192.168.1.3:9005';
    const {
        id,
        Fullname,
        Address,
        City,
        Region,
        Zipcode,
        Country,
    } = route.params;
    const [fullname, setFullname] = useState(Fullname);
    const [address, setAddress] = useState(Address);
    const [city, setCity] = useState(City);
    const [region, setRegion] = useState(Region);
    const [zipcode, setZipcode] = useState(Zipcode);
    const [country, setCountry] = useState(Country);

    const getToken = async () => {
        try {
          // console.log('ini');
          const token = await AsyncStorage.getItem('token');
          const fullName = await AsyncStorage.getItem('fullName');
          const email = await AsyncStorage.getItem('email');
          if ((token, fullName, email !== null)) {
            // value previously stored
            // console.log('Token ProfilePage ', token);
            // console.log('ProfilePage');
            return true;
          } else {
            console.log('token null');
            return false;
          }
        } catch (e) {
          // error reading value
          console.log(e);
        }
      };
      getToken();

      const handleSubmit = async () => {
          const data = {
              id_address: id,
              fullname: fullname,
              address: address,
              city: city,
              region: region,
              zip_code: zipcode,
              country: country,
          };
          axios.patch('http://192.168.1.3:9005/address/' + data.id_address, data, {
            headers: {
                'x-access-token': 'Bearer ' + await AsyncStorage.getItem('token')
              }
          }).then((res) => {
              console.log('bisa update' + data.id_address);
          }).catch((err) => {
              console.log(err);
          })
      }

      return (
        <ScrollView style={styles.container}>
          <View style={styles.input}>
            <FormInput
              value={fullname}
              onChangeText={(fullname) => setFullname(fullname)}
              label="Full Name"
              passiveBorderColor="white"
              activeBorderColor="black"
              activeLabelColor="black"
              style={styles.form1}
            />
          </View>
          <View style={styles.input}>
            <FormInput
              value={address}
              onChangeText={(address) => setAddress(address)}
              label="Address"
              passiveBorderColor="white"
              activeBorderColor="black"
              activeLabelColor="black"
              style={styles.form1}
            />
          </View>
          <View style={styles.input}>
            <FormInput
              value={city}
              onChangeText={(city) => setCity(city)}
              label="City"
              passiveBorderColor="white"
              activeBorderColor="black"
              activeLabelColor="black"
              style={styles.form1}
            />
          </View>
          <View style={styles.input}>
            <FormInput
              value={region}
              onChangeText={(region) => setRegion(region)}
              label="State/Province/Region"
              passiveBorderColor="white"
              activeBorderColor="black"
              activeLabelColor="black"
              style={styles.form1}
            />
          </View>
          <View style={styles.input}>
            <FormInput
              value={zipcode}
              onChangeText={(zipcode) => setZipcode(zipcode)}
              label="Zip Code (Postal Code)"
              passiveBorderColor="white"
              activeBorderColor="black"
              activeLabelColor="black"
              style={styles.form1}
            />
          </View>
          <View style={styles.input}>
            <FormInput
              value={country}
              onChangeText={(country) => setCountry(country)}
              label="Country"
              passiveBorderColor="white"
              activeBorderColor="black"
              activeLabelColor="black"
              style={styles.form1}
            />
          </View>
    
          <ButtonSubmit title="Save Address" bg="red" rippleColor="white" onPress={() => navigation.navigate('Profile', handleSubmit())} />
        </ScrollView>
      );
    };
    const styles = StyleSheet.create({
      container: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 35,
      },
      input: {
        paddingVertical: 15,
      },
    });
    
    export default UpdateShippingAddress;