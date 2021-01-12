import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import {Text} from '../../../components/';

class MyOrders extends Component {
    
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text
          children="My Orders"
          size="xl3"
          style={{fontWeight: 'bold', marginBottom: 25}}
        />
        <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('OrderDetails')}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              children="Order No.1947034"
              size="l"
              type="Bold"
              style={styles.textOrder}
            />
            <Text
              children="05-12-2019"
              size="m"
              color="gray"
              style={styles.textOrder}
            />
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text
                children="Tracking number: "
                style={styles.textOrder}
                color="gray"
              />
              <Text children="IW3475453455" style={styles.textOrder} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                children="Quantity: "
                style={styles.textOrder}
                color="gray"
              />
              <Text children="3" style={styles.textOrder} />
            </View>
            <View style={{flexDirection: "row"}}>
              <Text
                children="Total amount: "
                style={styles.textOrder}
                color="gray"
              />
              <Text children="$112" style={styles.textOrder} />
            </View>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text children="Delivered" color="green" />
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default MyOrders;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#E5E5E5',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  card: {
      elevation: 16,
    //   shadowRadius: 10,
    //   shadowOpacity: 0.1,
    //   shadowOffset:{
    //       width: 0,
    //       height: 8,
    //   },
    //   shadowColor: 'red',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  textOrder: {
    marginVertical: 5,
  },
});
