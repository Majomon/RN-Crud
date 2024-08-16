// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD_obpNAP-ZOcX9BPwAzpiQPKsYvjVnm6w',
  authDomain: 'rn-crud-f5219.firebaseapp.com',
  projectId: 'rn-crud-f5219',
  storageBucket: 'rn-crud-f5219.appspot.com',
  messagingSenderId: '339683326637',
  appId: '1:339683326637:web:7b6d490b1bfa97c7986424',
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;
