import { StackScreenProps } from '@react-navigation/stack';
import { deleteDoc, doc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { getOneProduct } from '../../../actions/get-one-products';
import appFirebase from '../../../firebase/firebaseConfig';
import { RootStackParams } from '../../navigation/StackNavigator';

const db = getFirestore(appFirebase);

interface Props extends StackScreenProps<RootStackParams, 'ShowScreen'> {}

interface Product {
  id: string;
  name: string;
  color: string;
  stock: string;
}

export const ShowScreen = ({route, navigation}: Props) => {
  const [product, setProduct] = useState<Product | null>(null);

  const deleteProduct = async (id:string) => {
    await deleteDoc(doc(db, 'productos', id));
    Alert.alert('Exito', `El producto ${product!.name} fue eliminado`);
    navigation.navigate('ProductScreen');
  };

  useEffect(() => {
    getOneProduct(route.params.productId, setProduct);

    return () => {
      setProduct(null);
    };
  }, []);

  if (!product) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Detalle de producto</Text>
      <View style={{paddingVertical: 20}}>
        <Text>Nombre: {product.name}</Text>
        <Text>Color: {product.color}</Text>
        <Text>Stock: {product.stock}</Text>

        <Pressable
          style={{
            marginVertical: 10,
            paddingVertical: 5,
            paddingHorizontal: 10,
            backgroundColor: 'red',
            borderRadius: 8,
          }}
          onPress={() => deleteProduct(route.params.productId)}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Eliminar
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
