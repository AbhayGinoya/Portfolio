import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini

const firebaseConfig = {
  apiKey: "AIzaSyA6ULbfClf4x3oQdIudKoDKjmR8zudGiE4",
  authDomain: "learn-d591e.firebaseapp.com",
  projectId: "learn-d591e",
  storageBucket: "learn-d591e.appspot.com",
  messagingSenderId: "1079084185126",
  appId: "1:1079084185126:web:ee2d01b11a63672c7718e7",
  measurementId: "G-XP5VE9EX40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };