import React, {useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export const CreateScreen = () => {
  const [state, setState] = useState({
    name: '',
    color: '',
    stock: '',
  });

  const handlerChangeText = (value: string, name: string) => {
    setState({...state, [name]: value});
  };

  //   <TextInput
  //   placeholder="Nombre"
  //   onChangeText={value =>
  //     setInitialState({...initialState, name: value})
  //   }
  // />
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create product</Text>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nombre"
          onChangeText={value => handlerChangeText(value, 'name')}
          value={state.name}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Color"
          onChangeText={value => handlerChangeText(value, 'color')}
          value={state.color}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Stock"
          onChangeText={value => handlerChangeText(value, 'stock')}
          value={state.stock}
          keyboardType='numeric'
        />
      </View>
      <View>
        <Button title="Guardar producto" />
      </View>
      <Text>{JSON.stringify(state, null, 2)}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 12,
    marginBottom: 18,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBlockColor: '#cccccc',
  },
});

{
  /* <TextInput
placeholder="Nombre"
onChangeText={value =>
  setInitialState({...initialState, name: value})
}
/> */
}
