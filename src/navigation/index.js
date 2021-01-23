import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../utils';
import {TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useSelector} from 'react-redux';

import {
  HomeScreen,
  BagScreen,
  FavoriteScreen,
  ShopScreen,
  ProfileScreen,
  MyOrdersScreen,
  OrderDetailsScreen,
  SettingsScreen,
  ShippingAddressScreen,
  AddingShippingAddressScreen,
  UpdateShippingAddress,
  DetailProductScreen,
  NotificationScreen,
  LoginScreen,
  LoginForgot,
  FilterScreen,
  RegisterScreen,
  ResetPasswordScreen,
  SearchScreen,
  ForgotPasswordScreen,
  ListScreen,
  CheckOutScreen,
  CatalogeScreen,
  MainCatalogScreen,
  SplashScreen,
  SuccessScreen,
  AddProduct,
  ProductSeller,
} from '../screens';

import MainProfile from './Profile';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const MainScreenView = () => {
  const level = useSelector((state) => state.authReducer.level);
  return (
    <BottomTab.Navigator
      // initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Shop') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Bag') {
            iconName = focused ? 'shopping' : 'shopping';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          }
          //  else if (route.name === 'Login') {
          //   iconName = focused ? 'account-circle' : 'account-circle-outline';
          // }
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: colors.white,
          paddingBottom: 5,
          paddingTop: 5,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          elevation: 8,
        },
        activeTintColor: colors.red,
        inactiveTintColor: colors.gray,
      }}>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Shop" component={ShopScreen} />
      {level === 1 && <BottomTab.Screen name="Bag" component={BagScreen} />}
      {/* <BottomTab.Screen name="Favorites" component={FavoriteScreen} /> */}
      <BottomTab.Screen name="Profile" component={MainProfileScreen} />
    </BottomTab.Navigator>
  );
};

const MainProfileScreen = () => {
  return <MainProfile />
}


const StackScreen = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        initialRouteName="Splash"
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={MainScreenView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Cataloge" component={CatalogeScreen} />
      <Stack.Screen name="Catalog" component={MainCatalogScreen} />
      <Stack.Screen
        name="Success"
        component={SuccessScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckOut"
        component={CheckOutScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailProduct"
        component={DetailProductScreen}
        options={({route}) => ({
          title: route.params.categories,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: 'Notification',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Adding Shipping Address"
        component={AddingShippingAddressScreen}
        options={{
          title: 'Adding Shipping Address',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Update Shipping Address"
        component={UpdateShippingAddress}
        options={{
          title: 'Update Shipping Address',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};
export const MainNavigation = () => {
  return (
    <NavigationContainer>
      {/* <AuthStackScreen /> */}
      <StackScreen />
    </NavigationContainer>
  );
};

// const HomeStackScreen = () => (
//   <HomeStack.Navigator>
//     <HomeStack.Screen
//       name="Splash"
//       component={SplashScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <HomeStack.Screen
//       name="Home"
//       component={MainScreenView}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <HomeStack.Screen
//       name="DetailProduct"
//       component={DetailProductScreen}
//       options={({route}) => ({
//         title: route.params.categories,
//         // headerStyle: {
//         //   backgroundColor: colors.red,
//         // },
//         // headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//         BottomTab: false,
//       })}
//     />
//     <HomeStack.Screen
//       name="Notification"
//       component={NotificationScreen}
//       options={{
//         title: 'Notification',
//         headerStyle: {
//           backgroundColor: colors.red,
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//         BottomTab: false,
//       }}
//     />
//     <HomeStack.Screen
//       name="Catalog"
//       component={MainCatalogScreen}
//       options={{
//         title: 'Catalog',
//         headerStyle: {
//           backgroundColor: colors.red,
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//         BottomTab: false,
//       }}
//     />
//   </HomeStack.Navigator>
// );

// const AuthStackScreen = () => (
//   <AuthStack.Navigator>
//     <AuthStack.Screen
//       name="Profile"
//       component={HomeStackScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <AuthStack.Screen
//       name="Shipping address"
//       component={ShippingAddressScreen}
//     />
//     <AuthStack.Screen
//       name="Adding Shipping Address"
//       component={AddingShippingAddressScreen}
//     />
//     <AuthStack.Screen
//       name="Update Shipping Address"
//       component={UpdateShippingAddress}
//     />
//     <AuthStack.Screen
//       name="Success"
//       component={SuccessScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <AuthStack.Screen
//       name="Login"
//       component={LoginScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <AuthStack.Screen
//       name="LoginForgot"
//       component={LoginForgot}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <AuthStack.Screen
//       name="Filter"
//       component={FilterScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <AuthStack.Screen
//       name="Register"
//       component={RegisterScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <AuthStack.Screen
//       name="ResetPassword"
//       component={ResetPasswordScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <AuthStack.Screen
//       name="Search"
//       component={SearchScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <AuthStack.Screen
//       name="ForgotPassword"
//       component={ForgotPasswordScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <AuthStack.Screen
//       name="ListScreen"
//       component={ListScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <AuthStack.Screen
//       name="CheckOut"
//       component={CheckOutScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//   </AuthStack.Navigator>
// );

// const ShopStackScreen = () => (
//   <ShopStack.Navigator>
//     <ShopStack.Screen
//       name="ShopMain"
//       component={ShopScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <ShopStack.Screen
//       name="Cataloge"
//       component={CatalogeScreen}
//       // options={{
//       //   headerShown: false,
//       // }}
//     />
//   </ShopStack.Navigator>
// );

// const ProfileStackScreen = () => (
//   <ProfileStack.Navigator>
//     <ProfileStack.Screen
//       name="ProfileMain"
//       component={ProfileScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <ProfileStack.Screen name="MyOrders" component={MyOrdersScreen} />
//     <ProfileStack.Screen name="OrderDetails" component={OrderDetailsScreen} />
//     <ProfileStack.Screen name="Settings" component={SettingsScreen} />
//     <ProfileStack.Screen name="AddProduct" component={AddProduct} />
//     <ProfileStack.Screen name="ProductSeller" component={ProductSeller} />
//   </ProfileStack.Navigator>
// );


