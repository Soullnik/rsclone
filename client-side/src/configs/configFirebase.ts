import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

firebase.initializeApp({
  apiKey: 'AIzaSyAIY6z8x1Iu13l-eoAl5i7v-t_RvQk_Xr8',
  authDomain: 'rsclone-c5c06.firebaseapp.com',
  databaseURL: 'https://rsclone-c5c06-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'rsclone-c5c06',
  storageBucket: 'rsclone-c5c06.appspot.com',
  messagingSenderId: '709769313283',
  appId: '1:709769313283:web:b454ad2867e8e52627a236',
});

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage().ref();
export const time = firebase.firestore.Timestamp
export const array = firebase.firestore.FieldValue
