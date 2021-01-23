import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";


firebase.initializeApp({
  apiKey: "AIzaSyDRsrc3qV5pz82wi-BjtS-1SUPBBNObqL8",
  authDomain: "rsclone-b3871.firebaseapp.com",
  databaseURL: "https://rsclone-b3871-default-rtdb.firebaseio.com",
  projectId: "rsclone-b3871",
  storageBucket: "rsclone-b3871.appspot.com",
  messagingSenderId: "1088692180844",
  appId: "1:1088692180844:web:09950b916b147ef8780549"
});

export const db = firebase.firestore();
export const auth = firebase.auth();