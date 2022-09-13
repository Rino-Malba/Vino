import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGLTIdPhKgVqQBzOub9XEqRg1H2xF0uKs",
    authDomain: "vinorpi.firebaseapp.com",
    projectId: "vinorpi",
    storageBucket: "vinorpi.appspot.com",
    messagingSenderId: "744731616362",
    appId: "1:744731616362:web:871ccbda8f82e7bd7fd613"
  };

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
  let storage = firebase.storage();

  export {firebase, db, storage};