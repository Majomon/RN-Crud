import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getList} from '../../../actions/get-list';
import {RootStackParams} from '../../navigation/StackNavigator';

interface Product {
  id: string;
  name: string;
  color: string;
  stock: string;
}

interface Props extends StackScreenProps<RootStackParams> {}

export const ProductScreen = ({navigation}: Props) => {
  const [list, setList] = useState<Product[]>([]);

  useEffect(() => {
    getList(setList);
  }, [list]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('CreateScreen')}>
          <Text style={styles.buttonText}>Agregar los productos</Text>
        </Pressable>
      </ScrollView>
      <FlatList
        data={list}
        numColumns={2}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({item}) => (
          <Pressable
            style={styles.buttonProduct}
            onPress={() =>
              navigation.navigate('ShowScreen', {productId: item.id})
            }>
            <Text style={styles.buttonText}>{item.name}</Text>
          </Pressable>
        )}
        ListFooterComponent={() => <View style={{height: 150}} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
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
  buttonProduct: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    margin: 15,
    backgroundColor: 'green',
    borderRadius: 10,
  },
});
