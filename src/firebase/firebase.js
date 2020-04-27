import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrSnZUh46_A-GCkKKzD6XBMO2wEjqLbLI",
  authDomain: "cls-instalacje.firebaseapp.com",
  databaseURL: "https://cls-instalacje.firebaseio.com",
  projectId: "cls-instalacje",
  storageBucket: "cls-instalacje.appspot.com",
  messagingSenderId: "466442449331",
  appId: "1:466442449331:web:67c6fb22ad968578529bc6",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
