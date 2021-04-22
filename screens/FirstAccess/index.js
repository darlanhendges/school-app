import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
  Platform,
} from 'react-native';
import { CommonActions } from "@react-navigation/native";
import Logo from '../../assets/logo';
import MainButton from '../../components/MainButton';
import { COLORS } from '../../constansts/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEYS } from '../../constansts/keys';


const { width, height } = Dimensions.get('window');
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.80;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.65; 5
const AnimatedSvg = Animated.createAnimatedComponent(Svg);


//https://picsum.photos/440/660
const DATA = [
  {
    id: "1-dummy",
  },
  {
    id: "1",
    url: "https://i.picsum.photos/id/474/440/660.jpg?hmac=5PQBc6Ja2YeT_up5sOAr-R0_JMX39GnMz0gYFcbfsFg",
    texto: () => {
      return (
        <View>
          <Text>Teste de uma escrita meio doida</Text>
          <Text>Teste de uma escrita meio doida</Text>
          <Text>Teste de uma escrita meio doida</Text>
        </View>)
    },
    poster: "https://i.picsum.photos/id/957/600/600.jpg?hmac=NwoTHvxirt1-MS-B4JL_UpLJIUr6qde7r17B7Ukq1Cc"
  },
  {
    id: "2",
    url: "https://i.picsum.photos/id/426/440/660.jpg?hmac=9SV_t4IXsbTRfguOLCXVKcB1bg_SRWd_C0yUFfL7gqE",
    texto: () => {

      return (<View>
        <Text>Teste de uma escrita meio doida</Text>
        <Text>Teste de uma escrita meio doida</Text>
        <Text>Teste de uma escrita meio doida</Text>
      </View>)
    },
    poster: "https://i.picsum.photos/id/1001/600/600.jpg?hmac=RmKSHosLEMCqxbgpuRM5WTfwO8ma1-qEyDARbFr4_uQ"
  },
  {
    id: "3",
    url: "https://i.picsum.photos/id/779/440/660.jpg?hmac=1Jo6m9wVaW-FseIt9cTh9nY9oWbnUc9S6fSjT8GtmzA",
    texto: () => {

      return (<View>
        <Text>Teste de uma escrita meio doida</Text>
        <Text>Teste de uma escrita meio doida</Text>
        <Text>Teste de uma escrita meio doida</Text>
      </View>)
    },
    poster: "https://i.picsum.photos/id/840/600/600.jpg?hmac=90IJOIPRI3WyOjTIVpcNL2wlrvFpEiRGs8_UCVAZNDA",
    button: true
  },
  {
    id: "6-dummy",
  },
];


const Backdrop = ({ scrollX }) => {
  return <View style={{ height: BACKDROP_HEIGHT, width, position: 'absolute' }}>
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id + '-backdrop'}
      removeClippedSubviews={false}
      contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
      renderItem={({ item, index }) => {
        if (!item.poster) {
          return null;
        }
        const translateX = scrollX.interpolate({
          inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
          outputRange: [0, width],
          // extrapolate:'clamp'
        });
        return (
          <Animated.View
            removeClippedSubviews={false}
            style={{ position: 'absolute', width: translateX, height, overflow: 'hidden' }}
          >
            <Image
              source={{ uri: item.poster }}
              style={{
                width,
                height: BACKDROP_HEIGHT,
                position: 'absolute'
              }}
            />
          </Animated.View>
        );
      }}
    />
    <LinearGradient
      colors={['rgba(0, 0, 0, 0)', 'white']}
      style={{
        height: BACKDROP_HEIGHT,
        width,
        position: 'absolute',
        bottom: 0,
      }}
    />
  </View>
}

const FirstAccess = ({ navigation }) => {

  React.useEffect(() => {

    async function testLocalStorage() {
      const localStorageFirstAccess = await AsyncStorage.getItem(KEYS.localStorageFirstAccess);

      if (localStorageFirstAccess) {
        alert('Usuário já viu essa tela precisa direcionar para o login.');
      }
    }

    testLocalStorage();

  }, []);


  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Backdrop data={DATA} scrollX={scrollX} />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Logo width={200} height={200} />
      </View>

      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{ alignItems: 'center' }}
        snapToInterval={ITEM_SIZE}
        snapToAlignment='start'
        pagingEnabled={true}

        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={14}
        renderItem={({ item, index }) => {

          if (!item.url) {
            return <View style={{ width: EMPTY_ITEM_SIZE }} />;
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
            extrapolate: 'clamp'
          });

          return (
            <View style={{ width: ITEM_SIZE }}>
              <Animated.View
                style={{
                  marginHorizontal: SPACING,
                  padding: SPACING * 2,
                  alignItems: 'center',
                  transform: [{ translateY }],
                  backgroundColor: COLORS.white,
                  borderRadius: 34
                }}
              >
                <Image
                  source={{ uri: item.url }}
                  style={styles.posterImage}
                />
                {item.texto()}

                <View style={{
                  paddingTop: 30,
                  width: '100%'
                }}>

                  {item.button &&
                    <MainButton
                      onPress={async () => {
                        await AsyncStorage.setItem(KEYS.localStorageFirstAccess, 'true');
                      }}
                      text="CONTINUAR"
                    />
                  }

                </View>
              </Animated.View>
            </View>
          );
        }}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'

  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  }
});


export default FirstAccess;
