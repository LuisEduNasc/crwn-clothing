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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;