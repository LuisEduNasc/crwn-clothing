import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC15sBKhXqBPPEf0k-q9fAzg1tqCEAzdzw",
  authDomain: "crwn-db-ac8fb.firebaseapp.com",
  databaseURL: "https://crwn-db-ac8fb.firebaseio.com",
  projectId: "crwn-db-ac8fb",
  storageBucket: "crwn-db-ac8fb.appspot.com",
  messagingSenderId: "785535641672",
  appId: "1:785535641672:web:42ab0769bd4f636342107d",
  measurementId: "G-T102EECXFN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;