import React from 'react'
import { Text, View } from 'react-native';

import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParams } from '../navigation/Navigation';

interface DetailScreenProps extends StackScreenProps<RootStackParams, 'DetailScreen'> {};

export const DetailScreen = ({ route }: DetailScreenProps) => {

  const movie = route.params;

  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  )
};
