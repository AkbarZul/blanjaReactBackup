
import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import splash from '../../assets/images/splash.png';
import {colors} from '../../utils';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace('Home');
      }, 3000);
    }, [navigation]);
    return (
      <View style={styles.splashBg}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor={colors.red}
        />
        <Image source={splash} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    splashBg: {
      backgroundColor: colors.red,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default SplashScreen;