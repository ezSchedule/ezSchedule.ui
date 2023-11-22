// firebase.js

import firebase from 'firebase/app';
import 'firebase/firestore'; // ou 'firebase/firestore' para o Firestore

const firebaseConfig = {
  apiKey: 'SuaChaveDaAPI',
  authDomain: 'seu-projeto.firebaseapp.com',
  databaseURL: 'https://seu-projeto.firebaseio.com',
  projectId: 'seu-projeto',
  storageBucket: 'seu-projeto.appspot.com',
  messagingSenderId: 'SeuID',
  appId: 'SuaAppID'
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore(); // ou firestore para o Firestore
