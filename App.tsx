/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';





function App(): JSX.Element {
  const images = [
    {
      "url": require('./app/Images/veg1500.jpeg'),
      "title": "Vegetables",
      "key":1
    },
    {
      "url": require('./app/Images/veg2500.jpeg'),
      "title": " Exotic Vegetables",
      "key":2

    },
    {
      "url": require('./app/Images/veg3500.jpeg'),
      "title": "Gifting",
      "key":3
    },
    {
      "url": require('./app/Images/f1500.jpeg'),
      "title": "Fruits",
      "key":4
    },
    {
      "url": require('./app/Images/f2500.jpeg'),
      "title": "Gourment Corner",
      "key":5,
    },
    {
      "url": require('./app/Images/f3500.jpeg'),
      "title": "Breads",
      "key":6
    }
  ];
  const width=Dimensions.get('screen').width
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const slideWidth = event.nativeEvent.layoutMeasurement.width;
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / slideWidth);
    setCurrentIndex(index);
  };
  const colors=["pink","red","green","yellow"]

  // const sliderImages = useMemo(() => {
  //   return images.map((image) => (
  //     <Image
  //       key={image.key}
  //       source={image.url}
  //       style={{ width: width, height: '100%' }}
  //       resizeMode="contain"
  //     />
  //   ));
  // }, [images]);


  // const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
  
    return () => clearInterval(intervalId);
  }, []);
  
  const autoSliderImages = (
    <Image
      key={images[currentIndex].key}
      source={images[currentIndex].url}
      style={{ width: width, height: '100%' }}
      resizeMode="contain"
    />
  );
  



  return (
    <ScrollView style={{
      backgroundColor: '#fff',
      flex:1,
    }}>
      <View
        style={{
          height: 45,
          width: '95%',
          borderWidth: 1,
          alignSelf: 'center',
          margin: 10,
          borderColor: 'grey',
          // padding:10,
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#fff'
        }}
      >
        <Image
          resizeMode='contain'
          style={{ height: 25, width: '10%', alignSelf: 'center', marginStart: 15 }}
          source={require('./app/Images/search.png')} />
        <TextInput
          placeholder='What are you looking for?'
          placeholderTextColor={'lightgrey'}
          style={{
            alignSelf: 'center',
            width: '85%',
            height: '90%',
            margin: 10,
            // padding:10,
            // backgroundColor: 'green'
          }} />
      </View>
      {/*========== Image Slider=========== */}
      <ScrollView
        style={{ height: 200,backgroundColor:'orange',width:'100%' }}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      // onMomentumScrollEnd={()=>console.log("event")}
      >
        {/* {images.map((image, index) => (
          <Image
            key={index}
            source={image.url}
            style={styles.imageSlider}
            resizeMode='contain'
            /> 
            ))}
          */}
           {autoSliderImages}
      </ScrollView>
      {/* ==============Shop our Collection========= */}
      <View>
      <Text
      style={{textAlign:'center',fontWeight:'800',color:'#000',fontSize:18}}>SHOP OUR COLLECTIONS</Text>
        <FlatList
          numColumns={3}
          data={images}
          style={{ padding: 8, }}
          renderItem={({ item, index }) => (
            <View
              style={{
                // backgroundColor: 'red',
                margin: 2,
                borderWidth: 1,
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                height:130,
                width:110
              }}>
              <Image
              resizeMode='cover'
                style={{ height: 90, width: 90, alignSelf: 'center' }}
                source={item.url} />
              <Text
              style={{textAlign:"center",
              color:'#000',
              width:100,
              height:30,
              alignSelf:'center',
              paddingTop:5,
              fontSize:12,
              fontWeight:'700'}}>
              {item.title}
              </Text>
            </View>
          )
          } />
      </View>
      {/* ===========Fruits============ */}
      <View>
        <View
        style={{
          height:50,
          width:'100%',
          padding:8,
          justifyContent:'space-between',
        flexDirection:'row'}}>
      <Text
      style={{textAlign:'center',fontWeight:'800',color:'#000',fontSize:18}}>FRUITS</Text>
        <Text style={{height:30,
          width:60,alignSelf:'center',
          textAlignVertical:'center', 
          textAlign:'center',
          borderRadius:5,
          color:"#fff",backgroundColor:'#000'}}>
          View all
        </Text>
      </View>
        <FlatList
          // numColumns={3}
          horizontal={true}
          data={images}
          style={{ padding: 8, }}
          renderItem={({ item, index }) => (
            <View
              style={{
                // backgroundColor: 'red',
                margin: 2,
                borderWidth: 1,
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                height:130,
                width:110
              }}>
              <Image
              resizeMode='cover'
                style={{ height: 90, width: 90, alignSelf: 'center' }}
                source={item.url} />
              <Text
              style={{textAlign:"center",
              color:'#000',
              width:100,
              height:30,
              alignSelf:'center',
              paddingTop:5,
              fontSize:12,
              fontWeight:'700'}}>
              {item.title}
              </Text>
            </View>
          )
          } />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'#000',
    flex: 1,
  },
  imageSlider: {
    height: 150,
    width: '100%',
    backgroundColor: 'orange',
    // alignSelf:'center',
    // justifyContent:'center',
  }
});

export default App;
