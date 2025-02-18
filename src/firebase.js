import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz6I0Y6YGfWtRHkf7pWbQ9kQrkUkBG3OY",
  authDomain: "my-portfolio-769a1.firebaseapp.com",
  projectId: "my-portfolio-769a1",
  storageBucket: "my-portfolio-769a1.firebasestorage.app",
  messagingSenderId: "60652674013",
  appId: "1:60652674013:web:eb9ff9cf08a27568e03434",
  measurementId: "G-XQMCV9X1RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };