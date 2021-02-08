import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCsfRvR8kVKtm-DW3UeeAOdjvM9vgwkqoE",
  authDomain: "crown-db-97b7f.firebaseapp.com",
  projectId: "crown-db-97b7f",
  storageBucket: "crown-db-97b7f.appspot.com",
  messagingSenderId: "928693677905",
  appId: "1:928693677905:web:8629f7c02b968c0d326d70",
  measurementId: "G-2HQGJQQXDF",
};

firebase.initializeApp(config);

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
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;