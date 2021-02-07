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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
