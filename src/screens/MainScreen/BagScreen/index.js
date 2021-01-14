import React from 'react';
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

import {connect} from 'react-redux';
import {deleteBag} from '../../../utils/redux/action/cartAction';
const BagScreen = ({navigation, cart, deleteBag}) => {
  // const { addToBag } = route.params;
  return (
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
                        <Text>Color: grey</Text>
                        {/* <Text style={{marginLeft: 5}}>Sizes: {item.size}</Text> */}
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
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity>
                    <View style={styles.circle}>
                      <Icon name="minus" color="black" />
                    </View>
                  </TouchableOpacity>
                  <Text style={{marginTop: 27, marginRight: 9}}>1</Text>
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
          <Text>112$</Text>
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
});
// export default BagScreen;
const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteBag: (id) => dispatch(deleteBag(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BagScreen);
