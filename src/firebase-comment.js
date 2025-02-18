import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDz6I0Y6YGfWtRHkf7pWbQ9kQrkUkBG3OY",
    authDomain: "my-portfolio-769a1.firebaseapp.com",
    projectId: "my-portfolio-769a1",
    storageBucket: "my-portfolio-769a1.firebasestorage.app",
    messagingSenderId: "60652674013",
    appId: "1:60652674013:web:eb9ff9cf08a27568e03434",
    measurementId: "G-XQMCV9X1RY"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };