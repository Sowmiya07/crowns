import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAWNPN7VoSRcXhw4I8b1W8GWUgHlrqE9A4",
  authDomain: "shopping-app-db.firebaseapp.com",
  databaseURL: "https://shopping-app-db.firebaseio.com",
  projectId: "shopping-app-db",
  storageBucket: "shopping-app-db.appspot.com",
  messagingSenderId: "82132927015",
  appId: "1:82132927015:web:9bd482466fb4249b2a0402"
};

export const createUserProfileDcument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log(error)
    }
  }
  return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
