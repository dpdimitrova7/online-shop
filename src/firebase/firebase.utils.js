import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBIHO3kkf5OEazfVI4twvtJjSTtMsu3C_0",
    authDomain: "online-shop-530d8.firebaseapp.com",
    projectId: "online-shop-530d8",
    storageBucket: "online-shop-530d8.appspot.com",
    messagingSenderId: "402402497251",
    appId: "1:402402497251:web:27b92f2a2bc7202d59abd6",
    measurementId: "G-ENE1B5NEMG"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //if there is no user object, exit this function

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date ();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
       console.log('error creating user', error);
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