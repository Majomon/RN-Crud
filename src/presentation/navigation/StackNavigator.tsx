import {createStackNavigator} from '@react-navigation/stack';
import {CreateScreen} from '../screens/create/CreateScreen';
import {ProductScreen} from '../screens/product/ProductScreen';
import {ShowScreen} from '../screens/show/ShowScreen';

export type RootStackParams = {
  ProductScreen: undefined;
  CreateScreen: undefined;
  ShowScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        /*       headerStyle: {
          backgroundColor: 'red',
        }, */
        /*      headerShown: false, */
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="ProductScreen"
        options={{title: 'Lista de productos'}}
        component={ProductScreen}
      />
      <Stack.Screen
        name="CreateScreen"
        options={{title: 'Create'}}
        component={CreateScreen}
      />
      <Stack.Screen name="ShowScreen" component={ShowScreen} />
    </Stack.Navigator>
  );
};
