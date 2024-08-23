import {deleteDoc, doc, getFirestore} from 'firebase/firestore';
import appFirebase from '../firebase/firebaseConfig';
import { Alert } from 'react-native';

const db = getFirestore(appFirebase);

export const deleteProduct = async (id: string) => {
  await deleteDoc(doc(db, 'productos', id));
  Alert.alert("Exito",`El producto de id: ${id} fue eliminado`)
};
