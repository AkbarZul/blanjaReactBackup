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
import {API_URL} from '@env';

// const BASE_URL = 'http://192.168.1.3:9005';
const actionSheetRef = createRef();

const MainCatalogScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    await axios
      .get(API_URL + `/products?keyword=created_at DESC&limit=100`)
      .then((res) => {
        const products = res.data.data.products;
        // console.log('Data CatalogMain  ', res.data.data.products);
        setProducts(products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // code to run on component mount
    // console.log('IDNya', itemId);
    getProduct();
    // getDataCard();
  }, []);

  return (
    <>
      <FlatGrid
        itemDimension={130}
        data={products}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DetailProduct', {
                itemId: item.id,
                categories: item.category_name,
              })
            }>
            <View style={[styles.itemContainer, {backgroundColor: '#ffffff'}]}>
              <Image
                source={{uri: `${JSON.parse(item.product_photo).shift()}`}}
                style={{borderRadius: 10, width: '100%', height: 100}}
              />
              <Text style={styles.itemName}>{item.product_name}</Text>
              <Text style={styles.itemCode}>{item.product_price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      {/* <Button
        style={styles.button}
        title="Go to BottomSheet"
        onPress={() => {
          actionSheetRef.current?.setModalVisible();
        }}
      />
      <ActionSheet gestureEnabled ref={actionSheetRef}>
        <View>
          <Text>YOUR CUSTOM COMPONENT INSIDE THE ACTIONSHEET</Text>
          <Text>YOUR CUSTOM COMPONENT INSIDE THE ACTIONSHEET</Text>
          <Text>YOUR CUSTOM COMPONENT INSIDE THE ACTIONSHEET</Text>
          <Text>YOUR CUSTOM COMPONENT INSIDE THE ACTIONSHEET</Text>
          <Text>YOUR CUSTOM COMPONENT INSIDE THE ACTIONSHEET</Text>
          <Text>YOUR CUSTOM COMPONENT INSIDE THE ACTIONSHEET</Text>
          <Text>YOUR CUSTOM COMPONENT INSIDE THE ACTIONSHEET</Text>
          <Text>YOUR CUSTOM COMPONENT INSIDE THE ACTIONSHEET</Text>
          <Text>YOUR CUSTOM COMPONENT INSIDE THE ACTIONSHEET</Text>
        </View>
      </ActionSheet> */}
    </>
  );
};

export default MainCatalogScreen;

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
  },
  itemName: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#000000',
  },
});
