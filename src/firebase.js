// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAcQ7mvo5-EOkMUEK0jR4M7DlF0Lm-LWGk",
  authDomain: "react-89078.firebaseapp.com",
  projectId: "react-89078",
  storageBucket: "react-89078.appspot.com",
  messagingSenderId: "781275332109",
  appId: "1:781275332109:web:2ac0f60b7dc20d63481f44",
  measurementId: "G-WNX9FF20LM"
};


  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };