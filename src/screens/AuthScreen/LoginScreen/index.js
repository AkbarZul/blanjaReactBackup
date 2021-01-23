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

// redux
import {connect} from 'react-redux';
import {login} from '../../../utils/redux/action/authAction';

const LoginScreen = ({navigation, login}) => {
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
        console.log('Token ', res.data.data.token);
        console.log('ID ', res.data.data.user_id);
        console.log('FullName ', res.data.data.full_name);
        console.log('Email ', res.data.data.email);
        console.log('Level ', res.data.data.level);
        const token = res.data.data.token;
        const user_id = res.data.data.user_id;
        const level = res.data.data.level;
        login(token, user_id, level);

        console.log('done');
        navigation.navigate('Main');
      })
      .catch((err) => {
        console.log(err);
      });
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

const mapDispatchToProps = (dispatch) => {
  return {
    login: (token, user_id, level) => dispatch(login(token, user_id, level)),
  };
};

export default connect(null, mapDispatchToProps)(LoginScreen);
