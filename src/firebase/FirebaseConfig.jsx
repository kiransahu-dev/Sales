import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfoX0UyUSJLIcXoplHlmqX2gEeQlwVygA",
  authDomain: "greenmart-c858c.firebaseapp.com",
  projectId: "greenmart-c858c",
  storageBucket: "greenmart-c858c.appspot.com",
  messagingSenderId: "1022072545414",
  appId: "1:1022072545414:web:9de6e60fce4ad82813f107",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
