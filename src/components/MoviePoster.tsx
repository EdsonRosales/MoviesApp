import React from 'react'
import { Image, StyleSheet, View } from 'react-native';

import type { Movie } from '../interfaces/movieInterface';

type MoviePosterProps = {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: MoviePosterProps) => {

  const { poster_path } = movie;
  const uriPoster = `https://image.tmdb.org/t/p/w500${poster_path}`

  return (
    <View 
      style={{
        width,
        height,
        marginHorizontal: 8
      }}
    >
      <View style={ styles.imageContainer }>
        <Image
          source={{ uri: uriPoster }}
          style={ styles.image }
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 2,
    },
    shadowOpacity: 0.40,
    shadowRadius: 3.84,
    elevation: 5,
  }
});