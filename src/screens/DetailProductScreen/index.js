import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ButtonSubmit, Text} from '../../components';
import {colors} from '../../utils';

import {connect} from 'react-redux';
import {addToBag} from '../../utils/redux/action/cartAction';

const BASE_URL = 'http://192.168.1.4:9005';

const DetailProductScreen = ({navigation, route, addToBag}) => {
  const {itemId, item, categories} = route.params;
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState({});
  const [cardTwo, setCardTwo] = useState([]);

  const [picture, setPicture] = useState([]);

  const getProduct = async (itemId) => {
    await axios
      .get(BASE_URL + `/products/` + itemId)
      .then((res) => {
        const product = res.data.data;
        console.log('Detail ', res.data.data);
        const picture2 = res.data.data.product_photo;
        const picture3 = JSON.parse(picture2);
        setProduct(product);
        setPicture(picture3);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const getProducts = async (item) => {
  //   await axios
  //     .get(BASE_URL + `/products/` + item)
  //     .then((res) => {
  //       const products = res.data.data;
  //       console.log('Detail ', res.data.data);
  //       setProducts(products);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const getDataPopular = () => {
    axios
      .get(BASE_URL + '/products?keyword=rating DESC')
      .then((res) => {
        const cardTwo = res.data.data.products;
        // console.log('DataPopular', cardTwo);
        setCardTwo(cardTwo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // code to run on component mount
    // console.log('semangat', itemId);
    getProduct(itemId);
    getDataPopular(itemId);

    // getDataCard();
  }, [itemId]);

  // useEffect(() => {
  //   getDataPopular(itemId);
  // }, [cardTwo]);

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.img}
          // source={require('../../assets/images/detailproduct.jpeg')}
          // source={{
          //   uri: 'http://192.168.18.29:8007/image/1610299176962-image.jpg',
          // }}
          source={
            product.product_photo
              ? {uri: `${JSON.parse(product.product_photo).shift()}`}
              : null
          }
          // source={{uri: `${JSON.parse(product.product_photo).shift()}`}}
        />
      </View>
      <ScrollView
        style={{
          paddingHorizontal: 10,
          paddingTop: 10,
          backgroundColor: '#E5E5E5',
          borderRadius: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{marginBottom: 7}}>
            <Text
              children={product.product_name}
              size="l"
              style={{fontWeight: '700'}}
            />
            <Text children={product.category_name} color="gray" size="l" />
          </View>
          <View>
            <Text
              children={
                product.product_price
                  ? `Rp.${product.product_price.toLocaleString('id-ID')}`
                  : null
              }
              style={{fontWeight: '700'}}
              color="red"
              size="xl"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Icon name="star" size={20} color={colors.yellow} />
          <Text children={product.rating} color="gray" />
        </View>
        <View style={{marginBottom: 13}}>
          <Text children={product.product_desc} size="l" />
        </View>

        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text
                children="Color"
                size="l"
                style={{fontWeight: '700', marginLeft: 5}}
              />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity style={styles.pickColor1}></TouchableOpacity>
                <TouchableOpacity style={styles.pickColor2}></TouchableOpacity>
                <TouchableOpacity style={styles.pickColor3}></TouchableOpacity>
                <TouchableOpacity style={styles.pickColor4}></TouchableOpacity>
              </View>
            </View>
            <View style={{alignItems: 'flex-start'}}>
              <Text
                children="Size"
                style={{fontWeight: '700', marginLeft: 5}}
                size="l"
              />
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity style={styles.pickSize}>
                    <Icon name="minus" size={30} color={colors.black} />
                  </TouchableOpacity>
                  <Text
                    children={product.size}
                    size="l"
                    style={{marginHorizontal: 4}}
                  />
                  <TouchableOpacity style={styles.pickSize}>
                    <Icon name="plus" size={30} color={colors.black} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.separator}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text
            children="You can also like this"
            size="xl"
            style={{fontWeight: '700'}}
          />
          <Text children="12 items" size="m" color="gray" />
        </View>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.slider}>
            {cardTwo.map(
              ({
                product_id,
                product_name,
                product_price,
                product_photo,
                category_name,
                rating,
                id,
              }) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('DetailProduct', {
                        itemId: id,
                        categories: category_name,
                      })
                    }
                    style={{paddingHorizontal: 10, marginBottom: 20}}
                    key={id}>
                    <View>
                      <Image
                        // source={require('../../../assets/images/home3.png')}
                        source={{uri: `${JSON.parse(product_photo).shift()}`}}
                        style={{borderRadius: 10, width: 120, height: 170}}
                      />
                      <View style={styles.rating}>
                        <Image
                          source={require('../../assets/images/Star.png')}
                        />

                        <Text children={rating} />
                      </View>
                      <Text children={product_name} />
                      <Text children={product_price} />
                    </View>
                  </TouchableOpacity>
                );
              },
            )}
          </ScrollView>
        </View>
      </ScrollView>
      <View style={{bottom: 0, backgroundColor: 'white', width: '100%'}}>
        <ButtonSubmit
          onPress={() => {
            addToBag(
              itemId,
              product.product_name,
              product.product_price,
              picture[0],
              product.size,
              product.color_name,
            );
            console.log(product.color_name)
            // navigation.navigate('Bag', {
            // addToBag: {
            //   // name: product.product_name,
            //   // photo: product.product_photo,
            //   // price: product.product_price,
            //   // size: product.size,
            // }
          }}
          bg="red"
          title="ADD TO CART"
        />
      </View>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToBag: (id, name, price, photo, size, color, qty) =>
      dispatch(addToBag(id, name, price, photo, size, color, qty)),
  };
};

export default connect(null, mapDispatchToProps)(DetailProductScreen);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  img: {
    height: 270,
    width: '100%',
  },
  pickColor1: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 75,
    // overflow: 'hidden',
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
  },
  pickColor2: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 75,
    // overflow: 'hidden',
    backgroundColor: '#D84242',
    borderWidth: 2,
    borderColor: 'white',
  },
  pickColor3: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 75,
    // overflow: 'hidden',
    backgroundColor: '#4290D8',
    borderWidth: 2,
    borderColor: 'white',
  },
  pickColor4: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 75,
    // overflow: 'hidden',
    backgroundColor: '#42D86C',
    borderWidth: 2,
    borderColor: 'white',
  },
  pickSize: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderRadius: 75,
    // overflow: 'hidden',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'white',
  },
  separator: {
    marginVertical: 20,
    opacity: 0.5,
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  rating: {
    flexDirection: 'row',
    marginTop: 6,
    alignItems: 'center',
  },

  slider: {
    marginTop: 5,
    flexDirection: 'row',
  },
});
// export default DetailProductScreen;
