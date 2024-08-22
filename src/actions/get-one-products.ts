import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from 'firebase/firestore';
import appFirebase from '../firebase/firebaseConfig';

const db = getFirestore(appFirebase);

export const getOneProduct = async (
  productId: string,
  setProduct: React.Dispatch<React.SetStateAction<any>>,
) => {
  try {
    const docRef = doc(db, 'productos', productId);
    const docSnap = await getDoc(docRef);
    setProduct(docSnap.data())
  } catch (error) {
    console.error(error);
  }
};
