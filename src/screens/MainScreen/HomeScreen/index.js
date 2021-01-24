import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Button,
  StatusBar,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {HeaderHome} from '../../../components';
import {Text} from '../../../components';
import {IconStarAct} from '../../../assets/icons';
import {
  showNotification,
  handleCancel,
  handleScheduledNotification,
} from '../../../notif';
import {API_URL} from '@env';

import {colors} from '../../../utils';

const HomeScreen = ({navigation}) => {
  const channel = 'notif';
  // const BASE_URL = 'http://192.168.1.3:9005';
  const [card, setCard] = useState([]);
  const [cardTwo, setCardTwo] = useState([]);

  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: 'notif',
        channelName: 'My Notification channel',
        channelDescription: 'A channel to categories your notification',
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      (created) => console.log(`createchannel returned '${created}'`),
    );
    // code to run on component mount
  }, []);

  useEffect(() => {
    PushNotification.getChannels((channel_ids) => {
      console.log(channel_ids);
    });
    getDataNew();
    getDataPopular();
  }, []);

  const getDataNew = () => {
    axios
      .get(API_URL + '/sorting?keyword=created_at DESC&limit=5')
      .then((res) => {
        const card = res.data.data;
        // console.log('DataNew ', res.data.data);
        setCard(card);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDataPopular = () => {
    axios
      .get(API_URL + '/products?keyword=rating DESC')
      .then((res) => {
        const cardTwo = res.data.data.products;
        // console.log('DataPopular', cardTwo);
        setCardTwo(cardTwo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(`here is ${pictures}`);

  return (
    <>
      <View>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="rgba(0,0,0,0)"
        />
        <HeaderHome>
          <Text children="My Profile" size="xl3" style={styles.myprofile} />
        </HeaderHome>
      </View>

      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <View style={styles.wrapTitleText}>
          <View>
            <Text children="New" size="xl3" style={styles.titeText} />
            <Text
              children="You’ve never seen it before!"
              size="m"
              style={styles.childText}
            />
          </View>
          <View>
            <Text
              onPress={() => navigation.navigate('Catalog')}
              children="See All"
              size="m"
              style={styles.childText}
            />
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.slider}>
          {card.map(
            ({
              product_id,
              product_name,
              product_price,
              product_photo,
              rating,
              category_name,
              color_name,
              id,
            }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('DetailProduct', {
                      itemId: id,
                      categories: category_name,
                      color: color_name,
                    })
                  }
                  style={{paddingHorizontal: 10}}
                  key={id}>
                  <View>
                    <Image
                      source={{uri: `${JSON.parse(product_photo).shift()}`}}
                      style={{borderRadius: 10, width: 120, height: 170}}
                    />
                    <View style={styles.rating}>
                      <Image
                        source={require('../../../assets/images/Star.png')}
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
        {/* <TouchableOpacity
          onPress={() =>
            showNotification('hello', 'This is Notification', channel)
          }>
          <Text children="Test notification bismillah" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text children="cancel notification" onPress={handleCancel} />
        </TouchableOpacity> */}
        <View style={styles.wrapTitleText}>
          <View>
            <Text children="Popular" size="xl3" style={styles.titeText} />
            <Text
              children="You’ve never seen it before!"
              size="m"
              style={styles.childText}
            />
          </View>
          <View>
            <Text
              onPress={() => navigation.navigate('Catalog')}
              children="See All"
              size="m"
              style={styles.childText}
            />
          </View>
        </View>

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
              color_name,
              id,
            }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('DetailProduct', {
                      itemId: id,
                      categories: category_name,
                      color: color_name,
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
                        source={require('../../../assets/images/Star.png')}
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
      </ScrollView>
      {/* <Button
          style={styles.button}
          title="Go to Notif"
          onPress={() => navigation.navigate('Notification')}
        />
        <Button
          style={styles.button}
          title="Go to Details"
          onPress={() => navigation.navigate('DetailProduct')}
        /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
  },
  titeText: {
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 2,
  },
  titleText: {
    textAlign: 'left',
  },
  wrapTitleText: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
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

export default HomeScreen;
