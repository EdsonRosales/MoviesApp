import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

import type { Cast } from '../interfaces/creditsInterface';

type CastItemProps = {
  actor: Cast;
}

export const CastItem = ({ actor }: CastItemProps) => {

  const uriActor = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={ styles.container }>
      <Image
        source={{ uri: uriActor }}
        style={ styles.imageActor }
      />

      <View style={ styles.actorInfo }>
        <Text style={ styles.actorNameText }>
          { actor.name }
        </Text>
        <Text style={ styles.actorCharactersText }>
          { actor.character }
        </Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
  imageActor: {
    width: 50, 
    height: 50, 
    borderRadius: 10
  },
  actorInfo: {
    marginLeft: 10,
  },
  actorNameText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  actorCharactersText: {
    fontSize: 16,
    opacity: 0.7
  },
});