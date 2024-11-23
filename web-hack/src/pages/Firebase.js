// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";



// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// export { auth, db, setDoc, getDoc, doc };

// Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHDZ3IfXmoCe3S1WjNaJ0AEm0fa6iWrnc",
  authDomain: "webahck.firebaseapp.com",
  projectId: "webahck",
  storageBucket: "webahck.appspot.com",
  messagingSenderId: "1098963258204",
  appId: "1:1098963258204:web:8fd1fc253b9dad711b0f99",
  measurementId: "G-4NLHSRMPCC"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth and Firestore instances
const auth = getAuth(app);
const db = getFirestore(app);

// Export modules for Firestore and Authentication
export { auth, db, setDoc, doc, getDoc };
