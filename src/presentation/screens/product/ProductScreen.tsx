import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getList } from '../../../actions/get-list';
import { RootStackParams } from '../../navigation/StackNavigator';

interface Product {
  id: string;
  name: string;
  color: string;
  stock: string;
}

interface Props extends StackScreenProps<RootStackParams> {}

export const ProductScreen = ({navigation}: Props) => {
  const [list, setList] = useState<Product[]>([])

  useEffect(() => {
    getList(setList)
  }, [])
  
  return (
    <View>
      <ScrollView style={{marginHorizontal: 20}}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('CreateScreen')}>
          <Text style={styles.buttonText}>Agregar los productos</Text>
        </Pressable>
        <View>
          <Text style={styles.textTitle}>Lista de los productos</Text>
        </View>
      </ScrollView>
      <Text>{JSON.stringify(list,null,2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 16,
  },
});
