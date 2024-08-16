import {collection, getDocs, getFirestore} from 'firebase/firestore';
import appFirebase from '../firebase/firebaseConfig';

const db = getFirestore(appFirebase);

interface Docs {
  id: string;
  name: string;
  color: string;
  stock: string;
}

export const getList = async (
  setList: React.Dispatch<React.SetStateAction<Docs[]>>,
) => {
  try {
    const querySnapShot = await getDocs(collection(db, 'productos'));
    const docs: Docs[] = [];
    querySnapShot.forEach(doc => {
      const {name, color, stock} = doc.data();
      docs.push({
        id: doc.id,
        name,
        color,
        stock,
      });
    });
    setList(docs);
  } catch (error) {
    console.log(error);
  }
};
