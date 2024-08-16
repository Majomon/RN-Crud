import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import { RootStackParams } from '../../navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams,"ShowScreen">{}

export const ShowScreen = ({route}:Props) => {
  console.log(route.params.productId)

  
  return (
    <View>
      <Text>ShowScreen</Text>
    </View>
  );
};
