import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCFoEN2RvDfPfZZjTTJ7LSbMNFOOEsp3_Q",
    authDomain: "crwn-db-48274.firebaseapp.com",
    projectId: "crwn-db-48274",
    storageBucket: "crwn-db-48274.appspot.com",
    messagingSenderId: "389428197301",
    appId: "1:389428197301:web:df0730dc19766425b7cbfc",
    measurementId: "G-KP88BR6E6S"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;