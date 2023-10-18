import React from 'react'
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  View 
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { useMovies } from '../hooks/useMovies';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

  const { nowPlayingMovies, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View 
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        <ActivityIndicator color="red" size={30} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        {/* Main Carousel */}
        <View style={{ height: 440 }}>
          <Carousel
            data={ nowPlayingMovies }
            renderItem={ ({ item }) =>  <MoviePoster movie={ item } />}
            sliderWidth={ windowWidth }
            itemWidth={ 300 }
            inactiveSlideOpacity={0.85}
          />
        </View>
        {/* Popular Movies */}
        <HorizontalSlider title='Now on cinemas' movies={ nowPlayingMovies } />
      </View>
    </ScrollView>
  )
};
