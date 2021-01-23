import React, {useState, useEffect, createRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import axios from 'axios';
import ActionSheet from 'react-native-actions-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

const BASE_URL = 'http://192.168.1.3:9005';

const ProductSeller = ({navigation, route}) => {
//   const {itemId} = route.params;
  const [product, setProduct] = useState([]);

  const getToken = async () => {
    try {
      console.log('ini');
      const token = await AsyncStorage.getItem('token');
      const fullName = await AsyncStorage.getItem('fullName');
      const email = await AsyncStorage.getItem('email');
      if ((token, fullName, email !== null)) {
        // value previously stored
        console.log('Token ProfilePage ', token);
        console.log('ProfilePage');
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

  const getProductsSeller = async () => {
    await axios
      .get(BASE_URL + '/products/user', {
        headers: {
          'x-access-token': 'Bearer ' + (await AsyncStorage.getItem('token')),
        },
      })
      .then((res) => {
        const product = res.data.data;
        console.log('Anjim', product);
        setProduct(product);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductsSeller();
  }, []);

  return (
    <>
      <FlatGrid
        itemDimension={130}
        data={product}
        style={StyleSheet.gridView}
        spacing={10}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DetailProduct', {
                // itemId: item.id,
                categories: item.category_name,
              })
            }>
            <View style={[styles.itemContainer]}>
              <Image
                source={{uri: `${JSON.parse(item.product_photo).shift()}`}}
                style={{borderRadius: 10, width: 120, height: 170}}
              />
               <Text style={styles.itemName}>{item.product_name}</Text>
              <Text style={styles.itemCode}>Rp.{item.product_price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
    marginTop: 30,
    marginBottom: 20,
  },
  itemName: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#000000',
  },
});

export default ProductSeller;
