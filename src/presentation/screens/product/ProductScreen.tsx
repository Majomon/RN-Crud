import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams> {}

export const ProductScreen = ({navigation}: Props) => {
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
