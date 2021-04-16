// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBnGKSOirwKB_Xze-h3KwQ4QoD5fX3D3Iw",
  authDomain: "swp-9659c.firebaseapp.com",
  projectId: "swp-9659c",
  storageBucket: "swp-9659c.appspot.com",
  messagingSenderId: "397084116812",
  appId: "1:397084116812:web:da203cb22dc7827384f1e9",
  measurementId: "G-S3XELK2YB6"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();

  export {db,auth};