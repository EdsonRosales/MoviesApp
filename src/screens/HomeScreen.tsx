import React from 'react'
import { ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

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
    <View style={{ marginTop: top + 20 }}>
      <MoviePoster movie={nowPlayingMovies[0]} />
    </View>
  )
};
