import React from 'react'
import { 
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View 
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

import type { RootStackParams } from '../navigation/Navigation';
import type { StackScreenProps } from '@react-navigation/stack';

interface DetailScreenProps extends StackScreenProps<RootStackParams, 'DetailScreen'> {};

const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ({ route, navigation }: DetailScreenProps) => {

  const movie = route.params;
  const uriPoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, cast, movieFull } = useMovieDetails(movie.id);

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

      {
        isLoading ? (
          <ActivityIndicator
            size={35}
            color="grey"
            style={{
              marginTop: 20
            }}
          />
        ) : (
          <MovieDetails
            movieFull={ movieFull! }
            cast={ cast }
          />
        )
      }

      {/* GoBack Button */}
      <TouchableOpacity
        style={ styles.backButton }
        onPress={ () => navigation.pop() }
      >
        <Icon
          name='arrow-back-outline'
          color='white'
          size={ 50 }
        />
      </TouchableOpacity>
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
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 40,
    left: 10,
  },
});