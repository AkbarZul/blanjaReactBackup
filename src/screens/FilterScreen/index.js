import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import Text from '../../components/Text';

export default class FilterScreen extends Component {
  state = {
    brand: '',
    pressed: false,
  };

  render() {
    return (
      <>
        <ScrollView style={styles.container}>
          <View style={styles.color}>
            <Text size="m" children="colors" style={styles.bold} />
          </View>
          <View style={styles.rec}>
            <TouchableOpacity>
              <View style={styles.circle}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.grey}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.red}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.bgwhite}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.brown}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.blue}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.sizes}>
            <Text size="m" children="sizes" style={styles.bold} />
          </View>
          <View style={styles.rec2}>
            <TouchableOpacity>
              <View style={styles.xs}>
                <Text size="m" children="XS" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.xs}>
                <Text size="m" children="S" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.xs}>
                <Text size="m" children="M" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.xs}>
                <Text size="m" children="L" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.xs}>
                <Text size="m" children="XL" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.sizes}>
            <Text size="m" children="category" style={styles.bold} />
          </View>
          <View style={styles.rec3}>
            <TouchableOpacity>
              <View style={styles.all}>
                <Text size="m" children="All" style={styles.xs2} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.all}>
                <Text size="m" children="Women" style={styles.s} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.all}>
                <Text size="m" children="Men" style={styles.m} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.all}>
                <Text size="m" children="Boys" style={styles.m} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.all}>
                <Text size="m" children="Girls" style={styles.xs2} />
              </View>
            </TouchableOpacity>
          </View>

          {/* dropdown */}

          <View
            style={{
              // marginTop:200,
              marginbottom: 150,
              flexDirection: 'row',
              // justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 15,
              backgroundColor: '#F9F9F9',
              elevation: 8,
            }}>
            <Picker
              mode="dropdown"
              selectedValue={this.state.brand}
              onValueChange={(itemValue) => this.setState({brand: itemValue})}
              style={{width: '80%', color: '#000', fontWeight: 'bold'}}>
              <Picker.Item label="Brand" />
              <Picker.Item label="Addidas" value="Addidas" />
              <Picker.Item label="Nike" value="Nike" />
              <Picker.Item label="Rebook" value="Rebook" />
              <Picker.Item label="Vans" value="Vans" />
              <Picker.Item label="Converse" value="Converse" />
            </Picker>
            {/* <Picker
              mode="dropdown"
              selectedValue={this.state.language}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
              }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker> */}
          </View>
        </ScrollView>

        <View style={styles.rec4}>
          <TouchableOpacity>
            <View style={styles.bt}>
              <Text size="m" children="Discard" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ListScreen')}>
            <View style={styles.bt}>
              <Text size="m" children="Apply" />
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#e5e5e5',
    // paddingHorizontal: 10,
  },

  color: {
    backgroundColor: '#F9F9F9',
    width: '100%',
    // marginTop: 10,
    elevation: 8,
    height: 45,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },

  rec: {
    backgroundColor: '#e5e5e5',
    height: 90,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circle: {
    // position: 'absolute',
    // bottom: 10,
    // left: 5,
    backgroundColor: 'black',
    borderRadius: 30,
    borderWidth: 1,
    // borderColor: '#ff0080',
    width: 36,
    height: 36,
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },

  grey: {
    // position: 'absolute',
    // bottom: 10,
    // left: 5,
    backgroundColor: '#F6F6F6',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#f6f6f6',
    width: 36,
    height: 36,
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 10,
  },

  red: {
    // position: 'absolute',
    // bottom: 10,
    // left: 5,
    backgroundColor: '#B82222',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#B82222',
    width: 36,
    height: 36,
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 10,
  },

  bgwhite: {
    // position: 'absolute',
    // bottom: 10,
    // left: 5,
    backgroundColor: '#BEA9A9',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#BEA9A9',
    width: 36,
    height: 36,
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 10,
  },

  brown: {
    // position: 'absolute',
    // bottom: 10,
    // left: 5,
    backgroundColor: '#E2BB8D',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E2BB8D',
    width: 36,
    height: 36,
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 10,
  },

  blue: {
    // position: 'absolute',
    // bottom: 10,
    // left: 5,
    backgroundColor: '#151867',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#151867',
    width: 36,
    height: 36,
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 10,
  },

  sizes: {
    backgroundColor: '#F9F9F9',
    width: '100%',
    // marginTop: 10,
    elevation: 8,
    height: 45,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },

  rec2: {
    backgroundColor: '#e5e5e5',
    height: 90,
    paddingHorizontal: 15,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },

  rec3: {
    backgroundColor: '#e5e5e5',
    height: 120,
    paddingHorizontal: 15,
    flexDirection: 'row',
    // elevation: 8,
    // width: '100%',
    // bottom: 0,
    // position: 'absolute',
    // justifyContent: 'space-between',
  },

  rec4: {
    backgroundColor: '#f9f9f9',
    height: 104,
    // paddingHorizontal: 15,
    flexDirection: 'row',
    elevation: 20,
    width: '100%',
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
    // alignItems: 'center',
  },

  xs: {
    // position: 'absolute',
    // bottom: 10,
    // left: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    // border: 'none',
    width: 40,
    height: 40,
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 10,
    alignItems: 'center',
  },

  all: {
    // position: 'absolute',
    // bottom: 10,
    // left: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    // border: 'none',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 10,
  },

  // all: {
  //   // position: 'absolute',
  //   // bottom: 10,
  //   // left: 5,
  //   backgroundColor: 'white',
  //   borderRadius: 10,
  //   borderWidth: 1,
  //   borderColor: 'white',
  //   // border: 'none',
  //   width: 100,
  //   height: 40,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginTop: 25,
  //   marginLeft: 10,
  // },

  bt: {
    // position: 'absolute',
    // bottom: 10,
    // left: 5,
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
    // border: 'none',
    width: 160,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 10,
  },
});
