import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDrMjFkPOaowPieZPIHEZztqIzNpLejurc",
  authDomain: "fire-chat-f9262.firebaseapp.com",
  projectId: "fire-chat-f9262",
  storageBucket: "fire-chat-f9262.appspot.com",
  messagingSenderId: "480873642389",
  appId: "1:480873642389:web:c576b4e88bdce498ab5e9c"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();