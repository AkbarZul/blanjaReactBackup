import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button,
  Image,
} from 'react-native';

const ShopScreen = ({navigation}) => {
  const BASE_URL = 'http://192.168.1.4:9005';
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getDataCategory();
  }, []);

  const getDataCategory = () => {
    axios
      .get(BASE_URL + '/categories')
      .then((res) => {
        const category = res.data.data;
        console.log('Category', category);
        setCategory(category);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // <View>
    //   <ClassicHeader
    //     headerTitle="Alat"
    //     // titleTextStyle={{color: colors.white}}
    //     leftComponentDisable
    //     backgroundColor={colors.white}
    //     rightComponent={
    //       <TouchableOpacity style={{marginRight: 15}}>
    //         <Icon name="plus" type="AntDesign" size={30} color={colors.red} />
    //       </TouchableOpacity>
    //     }
    //   />
    // </View>
    <>
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'white', fontSize: 24}}>SUMMER SALES</Text>
          <Text style={{color: 'white', fontSize: 14}}>Up to 50% off</Text>
        </TouchableOpacity>
        {/* <Text style={{color: 'grey', fontSize: 16, marginTop: 30}}>
          Choose Category
        </Text> */}
        {category.map(({id_categories, category_name, category_photo, id}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Cataloge', {
                  itemId: id_categories,
                  categories: category_name,
                })
              }
              key={id_categories}>
              <View style={styles.garis}>
                <View>
                  <Text style={{fontSize: 16, marginLeft: 30}}>
                    {category_name}
                  </Text>
                </View>
                <View>
                  <Image
                    source={{uri: `${category_photo}`}}
                    style={{borderRadius: 10, width: 120, height: 100}}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {/* <Button
        style={styles.button}
        title="Go to Filter"
        onPress={() => navigation.navigate('Filter')}
      />
      <Button
        style={styles.button}
        title="Go to Search"
        onPress={() => navigation.navigate('Search')}
      />
      <Button
        style={styles.button}
        title="Go to Peleman"
        onPress={() => navigation.navigate('Cataloge')}
      /> */}
    </>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#e5e5e5',
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  button: {
    width: '100%',
    height: 100,
    backgroundColor: 'red',
    // color: 'white',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 20,
  },

  // garis: {
  //   borderBottomColor: '#9B9B9B',
  //   borderBottomWidth: 1,
  //   height: 40,
  //   justifyContent: 'center',
  //   marginTop: 10,
  // },

  garis: {
    backgroundColor: '#ffffff',
    elevation: 10,
    marginTop: 30,
    width: '100%',
    height: 104,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
