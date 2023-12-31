import React from 'react'
import { FlatList, Text, View } from 'react-native';

import { MoviePoster } from './MoviePoster';
import type { Movie } from '../interfaces/movieInterface';

type HorizontalSliderProps = {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: HorizontalSliderProps) => {
  return (
    <View style={{ height: title ? 260 : 220 }}>
      {
        title && ( 
          <Text 
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginBottom: 10,
              marginLeft: 10
            }}
          >
            { title }
          </Text> )
      }
        <FlatList
          data={ movies }
          renderItem={({ item }) => (
            <MoviePoster movie={ item } width={ 140 } height={ 200 } />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={ true }
          showsHorizontalScrollIndicator={ false }
        />
    </View>
  )
};
