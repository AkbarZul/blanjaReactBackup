// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   Image,
//   TouchableHighlight,
//   TouchableOpacity,
// } from 'react-native';

// import CheckBox from '@react-native-community/checkbox';

// export default class CheckOut extends Component {
//   state = {
//     check: false,
//     check2: false,
//     check3: false,
//   };

//   handleCheckBox() {
//     this.setState({
//       check: !this.state.check,
//     });
//   }

//   handleCheckBox2() {
//     this.setState({
//       check2: !this.state.check2,
//     });
//   }

//   handleCheckBox3() {
//     this.setState({
//       check3: !this.state.check3,
//     });
//   }
//   render() {
//     return (
//       <>
//         <ScrollView style={styles.container}>
//           <Text style={styles.address}>Shiping address</Text>
//           <View style={styles.card}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 marginTop: 15,
//               }}>
//               <Text>Jane Doe</Text>
//               <Text style={{color: 'red'}}>Change</Text>
//             </View>
//             <View style={{marginTop: 10}}>
//               <Text>3 Newbridge Court</Text>
//               <Text>Chino Hills, CA 91709,</Text>
//             </View>
//           </View>
//           <Text style={styles.payment}>Payment</Text>
//           <View>
//             <View style={styles.checkboxcontainer}>
//               <View style={styles.master}>
//                 <Image
//                   source={require('../../../assets/images/mastercard.png')}
//                 />
//               </View>
//               <Text size="l" children="MasterCard" style={{marginLeft: -180}} />
//               <CheckBox
//                 tintColors={{true: '#DB3022', false: '#9B9B9B'}}
//                 value={this.state.check}
//                 onChange={() => this.handleCheckBox()}
//               />
//             </View>
//           </View>

//           <View>
//             <View style={styles.checkboxcontainer}>
//               <View style={styles.master}>
//                 <Image source={require('../../../assets/images/pos.png')} />
//               </View>
//               <Text
//                 size="l"
//                 children="Pos Indonesia"
//                 style={{marginLeft: -160}}
//               />
//               <CheckBox
//                 tintColors={{true: '#DB3022', false: '#9B9B9B'}}
//                 value={this.state.check2}
//                 onChange={() => this.handleCheckBox2()}
//               />
//             </View>
//           </View>

//           <View>
//             <View style={styles.checkboxcontainer}>
//               <View style={styles.master}>
//                 <Image source={require('../../../assets/images/gopay.png')} />
//               </View>
//               <Text size="l" children="Gopay" style={{marginLeft: -210}} />
//               <CheckBox
//                 tintColors={{true: '#DB3022', false: '#9B9B9B'}}
//                 value={this.state.check3}
//                 onChange={() => this.handleCheckBox3()}
//               />
//             </View>
//           </View>
//         </ScrollView>
//         <View style={styles.bottom}>
//           <View style={styles.order}>
//             <Text style={styles.order2}>Order:</Text>
//             <Text style={styles.order3}>112$</Text>
//           </View>

//           <View style={styles.order}>
//             <Text style={styles.order2}>Delivery:</Text>
//             <Text style={styles.order3}>15$</Text>
//           </View>

//           <View style={styles.order}>
//             <Text style={styles.summary}>Summary:</Text>
//             <Text style={styles.price}>127$</Text>
//           </View>
//           <TouchableHighlight
//             activeOpacity={0.6}
//             underlayColor="#DB3022"
//             // onPress={() => navigation.navigate('CheckOut')}
//             onPress={() => this.props.navigation.navigate('Success')}
//             style={styles.button}>
//             <Text>SUBMIT ORDER</Text>
//           </TouchableHighlight>
//         </View>
//       </>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     backgroundColor: '#e5e5e5',
//     paddingHorizontal: 15,
//   },

//   address: {
//     marginTop: 50,
//     fontSize: 24,
//     fontWeight: 'bold',
//   },

//   payment: {
//     marginTop: 30,
//     fontSize: 24,
//     fontWeight: 'bold',
//   },

//   card: {
//     width: '100%',
//     backgroundColor: '#ffffff',
//     height: 108,
//     // elevation: 20,
//     borderRadius: 20,
//     marginTop: 50,
//     paddingHorizontal: 15,
//   },

//   checkboxcontainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     // paddingHorizontal: 15,
//     marginTop: 30,
//     alignItems: 'center',
//   },

//   master: {
//     width: 64,
//     height: 38,
//     backgroundColor: '#ffffff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 10,
//   },

//   bottom: {
//     width: '100%',
//     height: 220,
//     backgroundColor: '#ffffff',
//     bottom: 0,
//     borderRadius: 30,
//     paddingHorizontal: 15,
//   },

//   order: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',

//     marginTop: 20,
//   },

//   order2: {
//     fontSize: 14,
//     color: 'gray',
//     //   fontWeight: 'bold',
//   },

//   order3: {
//     fontSize: 16,
//     color: 'black',
//     fontWeight: 'bold',
//   },

//   summary: {
//     fontSize: 16,
//     color: 'gray',
//     fontWeight: 'bold',
//   },

//   price: {
//     fontSize: 16,
//     color: 'black',
//     fontWeight: 'bold',
//   },

//   button: {
//     backgroundColor: 'white',
//     borderRadius: 50,
//     borderWidth: 1,
//     borderColor: 'black',
//     // border: 'none',
//     // width: 160,
//     height: 40,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 25,
//     // marginLeft: 10,
//     width: '100%',
//     // paddingHorizontal: 15,
//   },
// });


import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Alert,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {API_URL} from '@env';
import axios from 'axios';
import CheckBox from '@react-native-community/checkbox';
// import {clearCart, clearCheckout} from '../../../utils/redux/action/cartAction';
import {connect, useSelector} from 'react-redux';
import { clearCart, clearCheckout } from '../../../utils/redux/action/cartAction';
import PushNotification from 'react-native-push-notification';
import {
  showNotification,
  handleCancel,
  handleScheduledNotification,
} from '../../../notif';
import {API_URL} from '@env';

// import {useSelector} from 'react-redux';

const CheckOut = ({checkout, navigation}) => {
  const channel = 'notif';
  const [address, setAddress] = useState({});
  const [checkbox, setCheckbox] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  // const BASE_URL = 'http://192.168.1.3:9005';

  const getAddressUser = async () => {
    await axios
      .get(`${API_URL}/address`, {
        headers: {
          'x-access-token': 'Bearer ' + token,
        },
      })
      .then((res) => {
        const address = res.data.data[0];
        setAddress(address);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: 'notif',
        channelName: 'My Notification channel',
        channelDescription: 'A channel to categories your notification',
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      (created) => console.log(`createchannel returned '${created}'`),
    );
    // code to run on component mount
  }, []);

  useEffect(() => {
    getAddressUser();
    PushNotification.getChannels((channel_ids) => {
      console.log("Cek ",channel_ids);
    });
    handleSubmit();
  }, []);

  const token = useSelector((state) => state.authReducer.token);
  const transaction = async () => {
    await axios
      .post(`${API_URL}/orders`, checkout, {
        headers: {
          'x-access-token': 'Bearer ' + token,
        },
      })
      .then((res) => {
        console.log('success', checkout);
      })
      .catch((err) => {
        console.log(err);
      });
      clearCart();
    // clearCheckout();
    // clearCart();
  };

  const handleSubmit = () => {
    const checkbox = {
      checkbox: false,
      checkbox2: false,
    };
    setCheckbox(checkbox.checkbox);
    setCheckbox2(checkbox.checkbox2);
  };
  // state = {
  //   check: false,
  //   check2: false,
  //   check3: false,
  // };

  // handleCheckBox() {
  //   this.setState({
  //     check: !this.state.check,
  //   });
  // }

  // handleCheckBox2() {
  //   this.setState({
  //     check2: !this.state.check2,
  //   });
  // }

  // handleCheckBox3() {
  //   this.setState({
  //     check3: !this.state.check3,
  //   });
  // }
  // console.log('checkout', checkout);
  // console.log('TOKEN ', token);
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.address}>Shiping address</Text>
        {/* {address.map(
          ({id_address, fullname, address, city, state, zip_code, country}) => {
            return ( */}
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            <Text>{address.fullname}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Shipping address')}>
              <Text style={{color: 'red'}}>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 10}}>
            <Text>{`${address.address}, ${address.city}`}</Text>
            <Text>{`${address.state}, ${address.zip_code}, ${address.country}`}</Text>
          </View>
        </View>
        <Text style={styles.payment}>Payment</Text>
        <View>
          <View style={styles.checkboxcontainer}>
            <View style={styles.master}>
              <Image
                source={require('../../../assets/images/mastercard.png')}
              />
            </View>
            <Text size="l" children="MasterCard" style={{marginLeft: -180}} />
            <CheckBox
              tintColors={{true: '#DB3022', false: '#9B9B9B'}}
              value={checkbox}
              onValueChange={(checkbox) => setCheckbox(checkbox)}
            />
          </View>
        </View>
        <View>
          <View style={styles.checkboxcontainer}>
            <View style={styles.master}>
              <Image source={require('../../../assets/images/pos.png')} />
            </View>
            <Text
              size="l"
              children="Pos Indonesia"
              style={{marginLeft: -160}}
            />
            <CheckBox
              tintColors={{true: '#DB3022', false: '#9B9B9B'}}
              value={checkbox2}
              onValueChange={(checkbox2) => setCheckbox2(checkbox2)}
            />
          </View>
        </View>
        <View>
          <View style={styles.checkboxcontainer}>
            <View style={styles.master}>
              <Image source={require('../../../assets/images/gopay.png')} />
            </View>
            <Text size="l" children="Gopay" style={{marginLeft: -210}} />
            <CheckBox
              tintColors={{true: '#DB3022', false: '#9B9B9B'}}
              // value={this.state.check3}
              // onChange={() => this.handleCheckBox3()}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <View style={styles.order}>
          <Text style={styles.order2}>Order:</Text>
          <Text style={styles.order3}>
            Rp.
            {checkout.item
              .map((index) => {
                return index.sub_total_item;
              })
              .reduce((a, b) => {
                return a + b;
              }, 0)
              .toLocaleString('id-ID')}
          </Text>
        </View>

        <View style={styles.order}>
          <Text style={styles.order2}>Delivery:</Text>
          <Text style={styles.order3}>Rp.5000</Text>
        </View>

        <View style={styles.order}>
          <Text style={styles.summary}>Summary:</Text>
          <Text style={styles.price}>
            Rp.
            {checkout.item
              .map((index) => {
                return index.sub_total_item;
              })
              .reduce((a, b) => {
                return a + b;
              }, 5000)
              .toLocaleString('id-ID')}
          </Text>
        </View>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DB3022"
          style={styles.button}
          onPress={() =>
            Alert.alert(
              'Confirm',
              'Are you sure to proccess this order',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: () => {
                    transaction(),
                      navigation.navigate('Success'),
                      showNotification(
                        'hello',
                        'Sukses Melakukan Transaksi',
                        channel,
                      );
                  },
                },
              ],
              {cancelable: false},
            )
          }>
          <Text>SUBMIT ORDER</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#e5e5e5',
    paddingHorizontal: 15,
  },

  address: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
  },

  payment: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
  },

  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    height: 108,
    // elevation: 20,
    borderRadius: 20,
    marginTop: 50,
    paddingHorizontal: 15,
  },

  checkboxcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 15,
    marginTop: 30,
    alignItems: 'center',
  },

  master: {
    width: 64,
    height: 38,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  bottom: {
    width: '100%',
    height: 220,
    backgroundColor: '#ffffff',
    bottom: 0,
    borderRadius: 30,
    paddingHorizontal: 15,
  },

  order: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 20,
  },

  order2: {
    fontSize: 14,
    color: 'gray',
    //   fontWeight: 'bold',
  },

  order3: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },

  summary: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
  },

  price: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
    // border: 'none',
    // width: 160,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    // marginLeft: 10,
    width: '100%',
    // paddingHorizontal: 15,
  },
});

const mapStateToProps = (state) => {
  return {
    checkout: state.cart.checkout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // clearCart: () => dispatch(clearCart()),
    clearCheckout: () => dispatch(clearCheckout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);

