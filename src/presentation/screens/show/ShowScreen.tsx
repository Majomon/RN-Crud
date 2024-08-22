import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/StackNavigator';
import {collection, getDocs, getFirestore} from 'firebase/firestore';
import appFirebase from '../../../firebase/firebaseConfig';
import {getOneProduct} from '../../../actions/get-one-products';

const db = getFirestore(appFirebase);

interface Props extends StackScreenProps<RootStackParams, 'ShowScreen'> {}

interface Product {
  name: string;
  color: string;
  stock: string;
}

export const ShowScreen = ({route}: Props) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getOneProduct(route.params.productId, setProduct);

    return () => {
      setProduct(null);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Detalle de producto</Text>
      <View style={{paddingVertical: 20}}>
        <Text>Color: {product?.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
