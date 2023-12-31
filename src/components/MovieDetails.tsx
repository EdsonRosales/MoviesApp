import React from 'react'
import { FlatList, Text, View } from 'react-native';

import { CastItem } from './CastItem';
import Icon from 'react-native-vector-icons/Ionicons';

import type { MovieFull } from '../interfaces/movieInterface';
import type { Cast } from '../interfaces/creditsInterface';

type MovieDetailsProps = {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: MovieDetailsProps) => {
  return (
    <>
      {/* Details */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name='star-outline'
            color='grey'
            size={ 16 }
          />

          <Text style={{ left: 4 }}>{ movieFull.vote_average.toFixed(1) }</Text>
          {/* Movie genres */}
          <Text style={{ marginLeft: 5 }}>
             - { movieFull.genres.map( genre => genre.name ).join(', ') }
          </Text>
        </View>
        {/* Movie Synopsis */}
        <Text style={{ fontSize: 24, marginTop: 10, fontWeight: 'bold' }}>
          Synopsis
        </Text>
        <Text style={{ fontSize: 16 }}>{ movieFull.overview }</Text>
        {/* Budget */}
        <Text style={{ fontSize: 24, marginTop: 10, fontWeight: 'bold' }}>
          Budget
        </Text>
        <Text style={{ fontSize: 16 }}>
          { new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(movieFull.budget) }
        </Text>
      </View>

      {/* Casting */}
      <View style={{ marginTop: 10, marginBottom: 100 }}>
        <Text
          style={{
            fontSize: 24,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}
        >
          Cast
        </Text>
        <FlatList
          data={ cast }
          keyExtractor={ (item) => item.id.toString() }
          renderItem={ ({ item }) => (<CastItem actor={ item }/>)}
          horizontal={ true }
          showsHorizontalScrollIndicator={ false }
          style={{ marginTop: 10, height: 70 }}
        />
      </View>
    </>
  )
};
