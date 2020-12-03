import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDhLOiDpx1gSpCkjSmHPfSYSyTGFf5DOYU',
  authDomain: 'monstrodemo.firebaseapp.com',
  databaseURL: 'https://monstrodemo.firebaseio.com',
  projectId: 'monstrodemo',
  storageBucket: 'monstrodemo.appspot.com',
  messagingSenderId: '596011844161',
  appId: '1:596011844161:web:5c1fc7c9f528168778fcc0',
  measurementId: 'G-MTC7E78M6M',
};

firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error creating user', error.message);
    }
  }

  // eslint-disable-next-line consistent-return
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
