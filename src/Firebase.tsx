import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyA6cIDcvv7U8Wd5Y958PZoGWJY5-GL4MPs',
  authDomain: 'book-tracker-179ba.firebaseapp.com',
  projectId: 'book-tracker-179ba',
  storageBucket: 'book-tracker-179ba.appspot.com',
  messagingSenderId: '232406617061',
  appId: '1:232406617061:web:a7d9abba378d636d917d0c'
};
firebase.initializeApp(config);

export default firebase;
