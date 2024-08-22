import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/StackNavigator';
import {collection, getDocs, getFirestore} from 'firebase/firestore';
import appFirebase from '../../../firebase/firebaseConfig';
import {getOneProduct} from '../../../actions/get-one-products';

const db = getFirestore(appFirebase);

interface Props extends StackScreenProps<RootStackParams, 'ShowScreen'> {}

export const ShowScreen = ({route}: Props) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getOneProduct(route.params.productId, setProduct);

    console.log(product);
    
    return () => {
      setProduct({});
    };
  }, []);

  return (
    <View>
      <Text>ShowScreen</Text>
    </View>
  );
};
