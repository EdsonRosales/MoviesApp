import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParams } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';

interface DetailScreenProps extends StackScreenProps<RootStackParams, 'DetailScreen'> {};

const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ({ route }: DetailScreenProps) => {

  const movie = route.params;
  const uriPoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, cast, movieFull } = useMovieDetails(movie.id);
  console.log({ isLoading });

  return (
    <ScrollView>
      <View style={ styles.imageContainer }>
        <View style={ styles.imageBorder }>
          <Image
            source={{ uri: uriPoster }}
            style={ styles.posterImage }
          />
        </View>
      </View>
      <View style={ styles.marginContainer}>
        <Text style={ styles.subTitle }>{movie.original_title}</Text>
        <Text style={ styles.title }>{movie.title}</Text>
      </View>

      <View style={ styles.marginContainer}>
        <Icon
          name='star-outline'
          color="grey"
          size={ 20 }
        />
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  posterImage: {
    flex: 1
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8
  }
});