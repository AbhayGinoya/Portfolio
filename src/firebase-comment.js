import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA6ULbfClf4x3oQdIudKoDKjmR8zudGiE4",
  authDomain: "learn-d591e.firebaseapp.com",
  projectId: "learn-d591e",
  storageBucket: "learn-d591e.appspot.com",
  messagingSenderId: "1079084185126",
  appId: "1:1079084185126:web:ee2d01b11a63672c7718e7",
  measurementId: "G-XP5VE9EX40"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };