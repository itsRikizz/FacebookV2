// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCbztpwNiJSA__xZBmZ9-25UGphNg27kWk",
  authDomain: "facebook-clone-c60e8.firebaseapp.com",
  projectId: "facebook-clone-c60e8",
  storageBucket: "facebook-clone-c60e8.appspot.com",
  messagingSenderId: "11953331718",
  appId: "1:11953331718:web:15b48c9de1edc722ee2d87",
  measurementId: "G-HTB36B0VWD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
