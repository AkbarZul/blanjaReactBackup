// import React, {Component, useEffect, useState} from 'react';
// import {StyleSheet, View, ScrollView, Image, TouchableOpacity, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
// import Text from '../../../components/Text';
import {ButtonSubmit} from '../../../components/index';
// import {Picker} from '@react-native-picker/picker';
import FormInput from 'react-native-outline-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Picker} from '@react-native-picker/picker';
// import ImagePicker from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-crop-picker';
// import { Picker } from 'react-native-picker/picker';

const AddProduct = () => {
  useEffect(() => {
    getCategory();
    getSize();
    getColor();
    getCondition();
    getStatus();
  }, []);
  const BASE_URL = 'http://192.168.1.3:9005';
  const [image, setImage] = useState(null);
  // const [images, setImages] = useState(null);
  const [filePath, setFilePath] = useState([]);
  const [prodName, setProdName] = useState('');
  const [categories, setCategories] = useState([]);
  const [size, setSize] = useState([]);
  const [color, SetColor] = useState([]);
  const [condition, setCondition] = useState([]);
  const [prodPrice, setProdPrice] = useState('');
  const [prodQty, setProdQty] = useState('');
  const [prodDesc, setProdDesc] = useState('');
  const [status, setStatus] = useState([]);
  const [ctg, setCtg] = useState(0);
  const [sz, setSz] = useState(0);
  const [clr, setClr] = useState(0);
  const [cnd, setCnd] = useState(0);
  const [sts, setSts] = useState(0);

  const getToken = async () => {
    try {
      // console.log('ini');
      const token = await AsyncStorage.getItem('token');
      const fullName = await AsyncStorage.getItem('fullName');
      const email = await AsyncStorage.getItem('email');
      if ((token, fullName, email !== null)) {
        // value previously stored
        // console.log('Token ProfilePage ', token);
        // console.log('ProfilePage');
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

  const getCategory = async () => {
    await axios
      .get(BASE_URL + '/categories')
      .then((res) => {
        const categories = res.data.data;
        console.log('tai', categories);
        setCategories(categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSize = async () => {
    await axios
      .get(BASE_URL + '/sizes')
      .then((res) => {
        const size = res.data.data;
        console.log('size', size);
        setSize(size);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getColor = async () => {
    await axios
      .get(BASE_URL + '/colors')
      .then((res) => {
        const color = res.data.data;
        console.log('color', color);
        SetColor(color);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCondition = async () => {
    await axios
      .get(BASE_URL + '/condition')
      .then((res) => {
        const condition = res.data.data;
        console.log('kondisi', condition);
        setCondition(condition);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getStatus = async () => {
    await axios
      .get(BASE_URL + '/status')
      .then((res) => {
        const status = res.data.data;
        console.log('status', status);
        setStatus(status);
      })
      .catch((err) => {
        console.log('error status', err);
      });
  };

  const handleSubmit = async () => {
    const data = new FormData();
    data.append('product_name', prodName);
    data.append('category_id', ctg);
    data.append('size_id', sz);
    data.append('color_id', clr);
    data.append('condition_id', cnd);
    data.append('product_price', prodPrice);
    data.append('product_qty', prodQty);
    data.append('product_desc', prodDesc);
    // data.append('image', image);
    for (let i = 0; i < filePath.length; i++) {
      data.append('image', {
        name: filePath[i].path.split('/').pop(),
        type: filePath[i].mime,
        uri:
          Platform.OS === 'android'
            ? filePath[i].path
            : filePath[i].path.replace('file://', ''),
      });
    }
    data.append('status_product_id', sts);

    axios
      .post(BASE_URL + '/products', data, {
        headers: {
          'x-access-token': 'Bearer ' + (await AsyncStorage.getItem('token')),
          'Content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log('bisa post');
      })
      .catch((err) => {
        console.log('error disokin');
        console.log(err);
      });
  };

  // const pickSingleWithCamera = (cropping, mediaType = 'photo') => {
  //   ImagePicker.openCamera({
  //     cropping: cropping,
  //     width: 500,
  //     height: 500,
  //     includeExif: true,
  //     mediaType,
  //   })
  //     .then((image) => {
  //       console.log('received image', image);
  //       setImage(image);
  //       setImages(null);
  //     })
  //     .catch((e) => alert(e));
  // };

  // const pickSingle = (cropit, circular = false, mediaType) => {
  //   ImagePicker.openPicker({
  //     width: 500,
  //     height: 500,
  //     cropping: cropit,
  //     cropperCircleOverlay: circular,
  //     sortOrder: 'none',
  //     compressImageMaxWidth: 1000,
  //     compressImageMaxHeight: 1000,
  //     compressImageQuality: 1,
  //     compressVideoPreset: 'MediumQuality',
  //     includeExif: true,
  //     cropperStatusBarColor: 'white',
  //     cropperToolbarColor: 'white',
  //     cropperActiveWidgetColor: 'white',
  //     cropperToolbarWidgetColor: '#3498DB',
  //   })
  //     .then((image) => {
  //       console.log('received image', image);
  //       setImage({
  //         uri: image.path,
  //         width: image.width,
  //         height: image.height,
  //         mime: image.mime,
  //       });
  //       setImage(null);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       Alert.alert(e.message ? e.message : e);
  //     });
  // };

  const pickMultiple = () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
    })
      .then((images) => {
        console.log("ini gambar", images)
        setFilePath(images);
      })
      .catch((e) => alert(e));
  };

  // const cleanupImages = () => {
  //   ImagePicker.clean()
  //     .then(() => {
  //       console.log('removed tmp images from tmp directory');
  //     })
  //     .catch((e) => {
  //       alert(e);
  //     });
  // };

  // const cleanupSingleImage = () => {
  //   let img = image || (images && images.length ? images[0] : null);
  //   console.log('will cleanup image', image);

  //   ImagePicker.cleanSingle(img ? img.uri : null)
  //     .then(() => {
  //       console.log(`removed tmp image ${img.uri} from tmp directory`);
  //       setImage(null);
  //     })
  //     .catch((e) => {
  //       alert(e);
  //     });
  // };

  // const renderAsset = (image) => {
  //   // if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
  //   //   return this.renderVideo(image);
  //   // }

  //   return renderImage(image);
  // };

  // const renderImage = (image) => {
  //   return (
  //     <Image
  //       style={{
  //         width: 300,
  //         height: 200,
  //         resizeMode: 'contain',
  //         marginBottom: 10,
  //       }}
  //       source={image}
  //     />
  //   );
  // };
  return (
    <ScrollView style={styles.container}>
      <ScrollView vertical={true}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {/* {image ? renderAsset(image) : null} */}
          {/* {images
            ? images.map((i) => <View key={i.uri}>{renderAsset(i)}</View>)
            : null} */}
          {filePath.map((item) => {
            return (
              <Image
                key={filePath.indexOf(item)}
                source={{uri: filePath.length !== 0 ? item.path : ''}}
                style={styles.imgStyle}
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={{flexDirection: 'row'}}>
        {/* <TouchableOpacity
          onPress={() => pickSingleWithCamera(false)}
          style={styles.button}>
          <Text style={styles.text}>Select With Camera</Text>
        </TouchableOpacity> */}

        <TouchableOpacity onPress={pickMultiple} style={styles.button}>
          <Text style={styles.text}>Select Multiple</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.input}>
        <FormInput
          value={prodName}
          onChangeText={(prodName) => setProdName(prodName)}
          label="Name"
          passiveBorderColor="white"
          activeBorderColor="black"
          activeLabelColor="black"
          style={styles.form1}
        />
      </View>

      <Picker
        style={{width: '100%'}}
        selectedValue={ctg}
        onValueChange={(itemValue) => {
          setCtg(itemValue);
        }}>
        {categories.length !== 0 &&
          categories.map(({id_categories, category_name}) => {
            return (
              <Picker.Item
                key={id_categories}
                label={category_name}
                value={id_categories}
              />
            );
          })}
      </Picker>

      <Picker
        style={{width: '100%'}}
        selectedValue={sz}
        onValueChange={(itemValue) => {
          setSz(itemValue);
        }}>
        {size.length !== 0 &&
          size.map(({id, size}) => {
            return <Picker.Item key={id} label={size} value={id} />;
          })}
      </Picker>

      <Picker
        style={{width: '100%'}}
        selectedValue={clr}
        onValueChange={(itemValue) => {
          setClr(itemValue);
        }}>
        {color.length !== 0 &&
          color.map(({id, color_name}) => {
            return <Picker.Item key={id} label={color_name} value={id} />;
          })}
      </Picker>

      <Picker
        style={{width: '100%'}}
        selectedValue={cnd}
        onValueChange={(itemValue) => {
          setCnd(itemValue);
        }}>
        {condition.length !== 0 &&
          condition.map(({id, conditions}) => {
            return <Picker.Item key={id} label={conditions} value={id} />;
          })}
      </Picker>

      <View style={styles.input}>
        <FormInput
          value={prodPrice}
          onChangeText={(prodPrice) => setProdPrice(prodPrice)}
          label="price"
          passiveBorderColor="white"
          activeBorderColor="black"
          activeLabelColor="black"
          style={styles.form1}
        />
      </View>

      <View style={styles.input}>
        <FormInput
          value={prodQty}
          onChangeText={(prodQty) => setProdQty(prodQty)}
          label="Quantity"
          passiveBorderColor="white"
          activeBorderColor="black"
          activeLabelColor="black"
          style={styles.form1}
        />
      </View>

      <View style={styles.input}>
        <FormInput
          value={prodDesc}
          onChangeText={(prodDesc) => setProdDesc(prodDesc)}
          label="Description"
          passiveBorderColor="white"
          activeBorderColor="black"
          activeLabelColor="black"
          style={styles.form1}
        />
      </View>

      <Picker
        style={{width: '100%'}}
        selectedValue={sts}
        onValueChange={(itemValue) => {
          setSts(itemValue);
        }}>
        {status.length !== 0 &&
          status.map(({id, name}) => {
            return <Picker.Item key={id} label={name} value={id} />;
          })}
      </Picker>

      <ButtonSubmit
        title="ADD PRODUCT"
        bg="red"
        rippleColor="white"
        onPress={handleSubmit}
      />

      {/* <TouchableOpacity
          onPress={() => pickSingle(false)}
          style={styles.button}
        >
          <Text style={styles.text}>Select Single</Text>
        </TouchableOpacity>
       

        <TouchableOpacity
          onPress={cleanupImages}
          style={styles.button}
        >
          <Text style={styles.text}>Cleanup All Images</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={cleanupSingleImage}
          style={styles.button}
        >
          <Text style={styles.text}>Cleanup Single Image</Text>
        </TouchableOpacity> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingHorizontal: 15,
  },
  button: {
    backgroundColor: 'red',
    marginBottom: 10,
    height: 40,
    justifyContent: 'center',
    marginRight: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    paddingVertical: 15,
  },
  imgStyle: {
    width: 100,
    height: 100,
    margin: 5,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
  },
});

export default AddProduct;

//   const chooseFile = () => {
//     ImagePicker.openPicker({
//       multiple: true,
//       mediaType: 'photo',
//     }).then((images) => {
//       console.log(images);
//     });
//   };

{
  /* <Button title="choose Photo" onPress={chooseFile} /> */
}
