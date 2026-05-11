import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdguENZXMh5VO5hSy2TPUcuwWvkk5K2Aw",
  authDomain: "portfolio-auth-30c97.firebaseapp.com",
  projectId: "portfolio-auth-30c97",
  storageBucket: "portfolio-auth-30c97.firebasestorage.app",
  messagingSenderId: "125329741352",
  appId: "1:125329741352:web:534717be70c03611cdc71d",
  measurementId: "G-5Z7BWDC9VP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
