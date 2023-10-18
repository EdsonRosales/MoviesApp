import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParams } from '../navigation/Navigation';

interface DetailScreenProps extends StackScreenProps<RootStackParams, 'DetailScreen'> {};

const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ({ route }: DetailScreenProps) => {

  const movie = route.params;
  const uriPoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;


  return (
    <ScrollView>
      <View style={ styles.imageContainer }>
        <Image
          source={{ uri: uriPoster }}
          style={ styles.posterImage }
        />
      </View>
      <View style={ styles.marginContainer}>
        <Text style={ styles.subTitle }>{movie.original_title}</Text>
        <Text style={ styles.title }>{movie.title}</Text>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  imageContainer: {
    overflow: 'hidden',
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