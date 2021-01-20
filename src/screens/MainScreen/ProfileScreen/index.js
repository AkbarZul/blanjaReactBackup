import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Icon } from 'react-native-vector-icons/Icon';
import {Text} from '../../../components';
import {colors} from '../../../utils';

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const fullName = await AsyncStorage.getItem('fullName');
    const email = await AsyncStorage.getItem('email');
    if (token, fullName, email !== null) {
      console.log("token screen ", token);
      console.log('profile');
      return true;
    } else {
      console.log('token null');
      return false;
    }
  } catch (e) {
    console.log(e);
  }
};
getToken();
console.log('test');

const ProfileScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Text children="My Profile" size="xl3" style={styles.myprofile} />
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 50}}>
        <View style={{marginRight: 10}}>
          <Image
            style={styles.img}
            source={require('../../../assets/images/myprofile.png')}
          />
        </View>
        <View style={{marginLeft: 10, justifyContent: 'center'}}>
          <Text children="Matilda Brown" size="xl" />
          <Text children="matildabrown@rocketmail.com" size="m" color="gray" />
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.order}
          onPress={() => navigation.navigate('MyOrders')}>
          <View>
            <Text children="My orders" size="xl" />
            <Text children="Already have 12 orders" size="m" color="gray" />
          </View>
          <View>
            <Icon name="chevron-right" size={30} color={colors.gray} />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.order}
          onPress={() => navigation.navigate('Shipping address')}>
          <View>
            <Text children="Shipping address" size="xl" />
            <Text children="3 addresses" size="m" color="gray" />
          </View>
          <View>
            <Icon name="chevron-right" size={30} color={colors.gray} />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.order}
          onPress={() => navigation.navigate('Settings')}>
          <View>
            <Text children="Settings" size="xl" />
            <Text children="Notification, password" size="m" color="gray" />
          </View>

          <View>
            <Icon name="chevron-right" size={30} color={colors.gray} />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.order}
          onPress={() => navigation.navigate('AddProduct')}>
          <View>
            <Text children="Adding Product" size="xl" />
            <Text children="Notification, password" size="m" color="gray" />
          </View>

          <View>
            <Icon name="chevron-right" size={30} color={colors.gray} />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.order}
          onPress={() => navigation.navigate('ProductSeller')}>
          <View>
            <Text children="Adding Product" size="xl" />
            <Text children="Notification, password" size="m" color="gray" />
          </View>

          <View>
            <Icon name="chevron-right" size={30} color={colors.gray} />
          </View>
        </TouchableOpacity>
      </View>
      
      <Button
        style={styles.button}
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        style={styles.button}
        title="Go to Regis"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        style={styles.button}
        title="Go to Reset Password"
        onPress={() => navigation.navigate('ResetPassword')}
      />
      <Button
        style={styles.button}
        title="Go to Login Forgot"
        onPress={() => navigation.navigate('LoginForgot')}
      />
      {/* <Button
        style={styles.button}
        title="Go to Filter"
        onPress={() => navigation.navigate('Filter')}
      />
      <Button
        style={styles.button}
        title="Go to Search"
        onPress={() => navigation.navigate('Search')}
      /> */}
      <Button
        style={styles.button}
        title="Go to Forgot Password"
        onPress={() => navigation.navigate('ForgotPassword')}
      />
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#E5E5E5',
    paddingVertical: 25,
    paddingHorizontal: 10,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  myprofile: {
    fontWeight: 'bold',
    marginBottom: 50,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 75,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'black',
  },
  order: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 20,
  },
});
