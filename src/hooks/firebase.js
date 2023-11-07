import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore'; 


const firebaseConfig = {
  apiKey: 'chave da aplicação',
  authDomain: 'nosso dominio',
  //databaseURL: 'url do banco', // Somente se estivermos usando o real database
  projectId: 'id do nosso projeto',
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
