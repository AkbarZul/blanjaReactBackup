import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

export default class CheckOut extends Component {
  state = {
    check: false,
    check2: false,
    check3: false,
  };

  handleCheckBox() {
    this.setState({
      check: !this.state.check,
    });
  }

  handleCheckBox2() {
    this.setState({
      check2: !this.state.check2,
    });
  }

  handleCheckBox3() {
    this.setState({
      check3: !this.state.check3,
    });
  }
  render() {
    return (
      <>
        <ScrollView style={styles.container}>
          <Text style={styles.address}>Shiping address</Text>
          <View style={styles.card}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              <Text>Jane Doe</Text>
              <Text style={{color: 'red'}}>Change</Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text>3 Newbridge Court</Text>
              <Text>Chino Hills, CA 91709,</Text>
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
                value={this.state.check}
                onChange={() => this.handleCheckBox()}
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
                value={this.state.check2}
                onChange={() => this.handleCheckBox2()}
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
                value={this.state.check3}
                onChange={() => this.handleCheckBox3()}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottom}>
          <View style={styles.order}>
            <Text style={styles.order2}>Order:</Text>
            <Text style={styles.order3}>112$</Text>
          </View>

          <View style={styles.order}>
            <Text style={styles.order2}>Delivery:</Text>
            <Text style={styles.order3}>15$</Text>
          </View>

          <View style={styles.order}>
            <Text style={styles.summary}>Summary:</Text>
            <Text style={styles.price}>127$</Text>
          </View>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DB3022"
            onPress={() => navigation.navigate('CheckOut')}
            style={styles.button}>
            <Text>SUBMIT ORDER</Text>
          </TouchableHighlight>
        </View>
      </>
    );
  }
}

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
