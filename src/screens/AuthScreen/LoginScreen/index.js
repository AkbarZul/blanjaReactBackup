import React, {Component, useContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';

import Text from '../../../components/Text';
import {
  FormInput,
  ButtonSubmit,
  OutlineFormInput,
} from '../../../components/index';
import AwesomeAlert from 'react-native-awesome-alerts';

import OutlineInput from 'react-native-outline-input';

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('token', value);
  } catch (e) {
    
  }
}

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');
    if (value !== null) {
      // value previously stored
      console.log(value);
      console.log(userId);
    }
  } catch (e) {
    // error reading value
  }
};

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const data = {
      email: email,
      password: password,
    };
    axios
      .post('http://192.168.1.3:9005/auth/login', data)
      .then(async (res) => {
        console.log(res.data.data.token);
        console.log(res.data.data.userId);
        const token = res.data.data.token;
        const fullName = res.data.data.full_name;
        const email = res.data.data.email;
        const id = res.data.data.user_id;
        const userid = id.toString();
        console.log(typeof userid);

        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('userid', userid);
        await AsyncStorage.setItem('fullName', fullName);
        await AsyncStorage.setItem('email', email);
        console.log('done');
        await getData();
        navigation.navigate('Home');
        console.log('done2');
      })
      .catch((err) => {
        console.log(err);
        // console.log('erro disini');
      });
  };

  const showAlert = () => {
    return (
      <AwesomeAlert
        show={true}
        title={message.title}
        message={message.value}
        showProgress={message.status}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={true}
        showCancelButton={false}
        showConfirmButton={!message.status}
        confirmText="Mengerti !"
        confirmButtonColor={colors.baseLightColor}
        // onCancelPressed={() => {
        //   this.hideAlert();
        // }}
        onConfirmPressed={() => {
          setAlert(false);
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text size="xl3" children="Login" type="Bold" style={styles.title} />
      <View style={styles.FormInput}>
        <View style={styles.pass}>
          <OutlineInput
            value={email}
            onChangeText={(email) => setEmail(email)}
            label="Username"
            activeValueColor="black"
            activeBorderColor="green"
            activeLabelColor="green"
            passiveBorderColor="black"
            passiveLabelColor="black"
            passiveValueColor="black"
            // keyboardType="email-address"
            // autoCompleteType=
          />
        </View>
        <OutlineInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          label="Password"
          activeValueColor="black"
          activeBorderColor="green"
          activeLabelColor="green"
          passiveBorderColor="black"
          passiveLabelColor="black"
          passiveValueColor="black"
          secureTextEntry
          // style={{marginTop: 8}}
        />
        <TouchableOpacity>
          <View style={styles.forgot}>
            <Image
              source={require('../../../assets/image/Vector.png')}
              style={{marginTop: 5, marginLeft: 5, paddingHorizontal: 10}}
            />
            <Text
              size="s"
              children="Forgot Your Password?"
              type="Bold"
              style={{fontWeight: 'bold'}}
            />
          </View>
        </TouchableOpacity>

        <ButtonSubmit title="Login" bg="red" onPress={handleSubmit} />
      </View>
      {/* {alert ? showAlert() : null} */}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    height: '100%',
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 60,
  },
  FormInput: {
    justifyContent: 'center',
    height: '80%',
  },
  formI: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 8,
  },

  forgot: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  
  pass: {
    marginBottom: 15,
  },
});

export default LoginScreen;