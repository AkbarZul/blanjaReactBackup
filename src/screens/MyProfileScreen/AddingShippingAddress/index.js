import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Text from '../../../components/Text';
import {ButtonSubmit} from '../../../components/index';
import {Picker} from '@react-native-picker/picker';
import FormInput from 'react-native-outline-input';

export default class AddingShippingAddress extends Component {
  state = {
    Fullname: '',
    Address: '',
    City: '',
    Province: '',
    ZipCode: '',
  };
  handleChange(fullname) {
    this.setState({
      Fullname: fullname,
    });
  }
  handleChangeAdd(address) {
    this.setState({
      Address: address,
    });
  }
  handleChangeCity(city) {
    this.setState({
      City: city,
    });
  }
  handleChangeProv(province) {
    this.setState({
      Province: province,
    });
  }
  handleChangeCode(zipCode) {
    this.setState({
      ZipCode: zipCode,
    });
  }
  render() {
    const {Fullname, Address, City, Province, ZipCode} = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.input}>
          <FormInput
            value={Fullname}
            onChangeText={(fullname) => this.handleChange(fullname)}
            label="Full Name"
            passiveBorderColor="white"
            activeBorderColor="black"
            activeLabelColor="black"
            style={styles.form1}
          />
        </View>
        <View style={styles.input}>
          <FormInput
            value={Address}
            onChangeText={(address) => this.handleChangeAdd(address)}
            label="Address"
            passiveBorderColor="white"
            activeBorderColor="black"
            activeLabelColor="black"
            style={styles.form1}
          />
        </View>
        <View style={styles.input}>
          <FormInput
            value={City}
            onChangeText={(city) => this.handleChangeCity(city)}
            label="City"
            passiveBorderColor="white"
            activeBorderColor="black"
            activeLabelColor="black"
            style={styles.form1}
          />
        </View>
        <View style={styles.input}>
          <FormInput
            value={Province}
            onChangeText={(province) => this.handleChangeProv(province)}
            label="State/Province/Region"
            passiveBorderColor="white"
            activeBorderColor="black"
            activeLabelColor="black"
            style={styles.form1}
          />
        </View>
        <View style={styles.input}>
          <FormInput
            value={ZipCode}
            onChangeText={(zipCode) => this.handleChangeCode(zipCode)}
            label="Zip Code (Postal Code)"
            passiveBorderColor="white"
            activeBorderColor="black"
            activeLabelColor="black"
            style={styles.form1}
          />
        </View>
        <View style={styles.input}>
          <Picker
            mode="dropdown"
            selectedValue={this.state.country}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({country: itemValue})
            }
            style={{
              color: 'gray',
              height: 58,
              backgroundColor: 'white',
              width: '98%',
              borderRadius: 5,
            }}>
            <Picker.Item label="Country" />
            <Picker.Item label="United States" value="United States" />
            <Picker.Item label="Indonesia" value="Indonesia" />
            <Picker.Item label="England" value="England" />
          </Picker>
        </View>
        <ButtonSubmit title="Save Address" bg="red" rippleColor="white" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 35,
  },
  input: {
    paddingVertical: 15,
  },
});
