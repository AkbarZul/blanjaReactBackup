import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../utils';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  deleteBag,
  increaseQuantity,
  decreaseQuantity,
} from '../../../utils/redux/action/cartAction';

const BagScreen = ({
  navigation,
  cart,
  deleteBag,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const getToken = async () => {
    try {
      console.log('ini');
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        // value previously stored
        console.log('Token Sukses ', token);
        console.log('Successs Login cuy');
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
  console.log(`ini tester`);
  // const { addToBag } = route.params;

  // const [count, setCount] = useState(0);

  // tambah = () => {
  //   setCount(count + 1);
  // };

  // kurang = () => {
  //   setCount(count - 1);
  // };

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    let items = 0;
    let prices = 0;

    cart.forEach((item) => {
      items += item.qty;
      prices += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(prices);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
  
  
  

  return (
    <>
      {getToken == null ? (
        navigation.push('Login')
      ) : (
        <>
          <ScrollView style={styles.container}>
            <Text style={styles.bag}>My Bag</Text>
            {cart.map((item) => {
              return (
                <View style={styles.bag2} key={item.id}>
                  {/* <Image source={require('../../../assets/images/card1.png')} /> */}
                  <Image
                    source={{uri: `${item.photo}`}}
                    style={{borderRadius: 10, width: 120, height: 130}}
                  />
                  <View
                    style={{
                      flexDirection: 'column',
                      marginHorizontal: 10,
                      marginTop: 5,
                    }}>
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View>
                          <Text>{item.name}</Text>
                          <View style={{flexDirection: 'row', marginTop: 7}}>
                            <Text>Color: {item.color}</Text>
                            <Text style={{marginLeft: 5}}>
                              Sizes: {item.size}
                            </Text>
                          </View>
                        </View>
                        <TouchableOpacity onPress={() => deleteBag(item.id)}>
                          <Icon name="delete" size={30} />
                          {/* <Text>delete</Text> */}
                        </TouchableOpacity>
                      </View>
                    </View>
                    {/* <View style={{alignItems: 'flex-end'}}>
              <Text>Titik tiga</Text>
            </View> */}
                    {/* <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity>
                    <View style={styles.circle}>
                      <Icon name="minus" color="black" />
                    </View>
                  </TouchableOpacity>
                  <Text style={{marginTop: 27, marginRight: 9}}>
                    {item.qty}
                  </Text>
                  <TouchableOpacity>
                    <View style={styles.circle}>
                      <Icon name="plus" color="black" />
                    </View>
                  </TouchableOpacity>
                  <View>
                    <Text style={{marginTop: 30, marginLeft: 40}}>
                      Rp. {item.price}
                    </Text>
                  </View>
                </View> */}

                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 20,
                        alignContent: 'center',
                        justifyContent: 'center',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        {item.qty === 1 ? (
                          <TouchableOpacity style={styles.pickSize}>
                            <Icon name="minus" size={20} color={colors.black} />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            style={styles.pickSize}
                            onPress={() => decreaseQuantity(item.id)}>
                            <Icon name="minus" size={20} color={colors.black} />
                          </TouchableOpacity>
                        )}
                        <Text size="l" style={{marginHorizontal: 4}}>
                          {item.qty}
                        </Text>
                        <TouchableOpacity
                          style={styles.pickSize}
                          onPress={() => increaseQuantity(item.id)}>
                          <Icon name="plus" size={20} color={colors.black} />
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          marginTop: 30,
                          marginLeft: 55,
                          paddingBottom: 30,
                        }}>
                        <Text>Rp.{item.price * item.qty}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.bottom}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 25,
              }}>
              <Text>Total Unmount:</Text>
              <Text>Rp. {totalPrice}</Text>
            </View>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DB3022"
              onPress={() => navigation.navigate('CheckOut')}
              style={styles.button}>
              <Text>CheckOut</Text>
            </TouchableHighlight>
          </View>
        </>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#e5e5e5',
    paddingHorizontal: 15,
  },

  bag: {
    marginTop: 50,
    fontSize: 34,
    fontWeight: 'bold',
  },

  bag2: {
    backgroundColor: '#ffffff',
    elevation: 10,
    marginTop: 30,
    width: '100%',
    height: 130,
    borderRadius: 10,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },

  circle: {
    // position: 'absolute',
    // bottom: 10,
    // left: 5,
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'black',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginRight: 9,
    elevation: 10,
  },

  bottom: {
    width: '100%',
    height: 155,
    backgroundColor: 'white',
    elevation: 10,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 15,
    marginTop: 10,
    // position: 'absolute',
    bottom: 0,
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
  },
  pickSize: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
    borderRadius: 75,
    // overflow: 'hidden',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
  },
});
// export default BagScreen;
const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBag: (id) => dispatch(deleteBag(id)),
    increaseQuantity: (id) => dispatch(increaseQuantity(id)),
    decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BagScreen);
