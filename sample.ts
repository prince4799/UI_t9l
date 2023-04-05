import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {
  const images = [
    require('./app/Images/veg1500.jpeg'),
    require('./app/Images/veg2500.jpeg'),
    require('./app/Images/veg3500.jpeg'),
    require('./app/Images/f1500.jpeg'),
    require('./app/Images/f2500.jpeg'),
    require('./app/Images/f3500.jpeg')
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const slideWidth = event.nativeEvent.layoutMeasurement.width;
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / slideWidth);
    setCurrentIndex(index);
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={styles.searchContainer}>
        <Image
          resizeMode='contain'
          style={styles.searchIcon}
          source={require('./app/Images/search.png')}
        />
        <TextInput
          placeholder='What are you looking for?'
          placeholderTextColor={'lightgrey'}
          style={styles.searchInput}
        />
      </View>
      <View style={styles.imageSliderContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScroll}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              source={image}
              style={styles.imageSlider}
              resizeMode='contain'
            />
          ))}
        </ScrollView>
      
      </View>
      {/* ==============Shop our Collection========= */}
      <View></View>
      {/* ===========Fruits============ */}
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    height: 45,
    width: '95%',
    borderWidth: 1,
    alignSelf: 'center',
    margin: 10
  },
  imageSlider: {
    height: 150,
    width: '100%',
    backgroundColor: 'orange',
    alignSelf:'center',
    justifyContent:'center',
  }
})