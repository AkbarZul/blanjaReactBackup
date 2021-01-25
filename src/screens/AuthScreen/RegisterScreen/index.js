import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Text from '../../../components/Text';
import {
  FormInput,
  ButtonSubmit,
  OutlineFormInput,
} from '../../../components/index';

import OutlineInput from 'react-native-outline-input';
import {API_URL} from '@env';
import { connect } from 'react-redux';
import { register } from '../../../utils/redux/action/authAction';
import { colors } from '../../../utils';
import { color } from 'react-native-reanimated';

const Register = ({navigation, register}) => {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [level, setLevel] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = () => {
    const emailFormat = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (username === '') {
      setErrMsg('please fill username first')
    } else if (fullname === '') {
      setErrMsg('please fill fullname first')
    } else if (email === '') {
      setErrMsg('please fill email first')
    } else if (!email.match(emailFormat)) {
      setErrMsg('invalid format email youremail@domain.com')
    } else if (password === '') {
      setErrMsg('please fill password first')
    } else {
      const data = {
        username: username,
        full_name: fullname,
        email: email,
        password: password,
        level_id: level,
      };
      axios.post(API_URL + '/auth/register', data).then(async (res) => {
        register(username, fullname, email, level)
        navigation.navigate('Login')
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  
  return (
    <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Text size="xl3" children="Sign up" type="Bold" style={styles.title} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 20,
          }}>
          <TouchableOpacity
            style={styles.btnUser}
            onPress={(level) => setLevel('2')}>
            <Text color="white">Seller</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnUser}
            onPress={(level) => setLevel('1')}>
            <Text color="white">Customer</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.FormInput}>
          <View
            style={{
              justifyContent: 'center',
              width: '100%',
              marginVertical: 15,
            }}>
            {level === '2' ? (
              <Text children="Sign Up For Seller" size="l" />
            ) : (
              <Text children="Sign Up For Customer" size="l" />
            )}
          </View>
          <Text
            style={{
              marginBottom: 10,
              color: 'red',
              paddingRight: 10,
              fontSize: 15,
              textAlign: 'center',
            }}>
            {errMsg}
          </Text>
          <View style={styles.pass}>
            <OutlineInput
              value={username}
              onChangeText={(username) => setUsername(username)}
              label="Username"
              activeValueColor='black'
              activeBorderColor='green'
              activeLabelColor='green'
              passiveBorderColor='black'
              passiveLabelColor='black'
              passiveValueColor='black'
            />
          </View>
          <View style={styles.pass}>
            <OutlineInput
              value={fullname}
              onChangeText={(fullname) => setFullname(fullname)}
              label="Full Name"
              activeValueColor='black'
              activeBorderColor='green'
              
              activeLabelColor='green'
              passiveBorderColor='black'
              
              passiveLabelColor='black'
              
              passiveValueColor='black'
              
            />
          </View>
          <View style={styles.pass}>
            <OutlineInput
              value={email}
              onChangeText={(email) => setEmail(email)}
              label="Email"
              activeValueColor='black'
              activeBorderColor='green'
              activeLabelColor='green'
              passiveBorderColor='black'
              passiveLabelColor='black'
              passiveValueColor='black'
              keyboardType="email-address"
              autoCompleteType="email"
            />
          </View>
          <OutlineInput
            value={password}
            onChangeText={(password) => setPassword(password)}
            label="Password"
            activeValueColor='black'
            activeBorderColor='green'
            activeLabelColor='green'
            passiveBorderColor='black'
            passiveLabelColor='black'
            passiveValueColor='black'
            secureTextEntry
            // style={{marginTop: 8}}
          />
          {/* <Text
              style={{
                marginTop: 5,
                marginBottom: 10,
                color: 'red',
                paddingRight: 10,
                fontSize: 15,
                textAlign: 'right',
              }}>
              {errMsg}
            </Text> */}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View style={styles.forgot}>
              <Image
                source={require('../../../assets/image/Vector.png')}
                style={{marginTop: 5, marginLeft: 5, paddingHorizontal: 10}}
              />
              <Text
                size="s"
                children="Already have an account?"
                type="Bold"
                style={{fontWeight: 'bold'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSignup} onPress={handleSubmit}>
            <Text size="xl" color="white">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  btnUser: {
    paddingVertical: 10,
    marginHorizontal: 5,
    backgroundColor: colors.red,
    borderRadius: 50,
    width: 90,
    alignItems: 'center',
  },
  levelid: {
    backfaceVisibility: 'hidden',
  },
  FormInput: {
    // justifyContent: 'center',
    // height: '80%',
    marginTop: 30,
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
  btnSignup: {
    backgroundColor: colors.red,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 10,
  },
  pass: {
    marginBottom: 15,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    register: (username, fullname, email, password, level) =>
    dispatch(register(username, fullname, email, password, level))
  }
}

export default connect(null, mapDispatchToProps)(Register);
