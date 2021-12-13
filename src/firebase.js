// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyComYqw_TnfvrRWJ9jO_GZHI528wZa-i5s',
  authDomain: 'test-ccec5.firebaseapp.com',
  projectId: 'test-ccec5',
  storageBucket: 'test-ccec5.appspot.com',
  messagingSenderId: '259500480861',
  appId: '1:259500480861:web:f090de2879b4e38352b0b4',
  measurementId: 'G-DWG43SP9RB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
