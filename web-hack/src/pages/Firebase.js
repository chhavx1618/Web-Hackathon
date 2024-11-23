import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHDZ3IfXmoCe3S1WjNaJ0AEm0fa6iWrnc",
  authDomain: "webahck.firebaseapp.com",
  projectId: "webahck",
  storageBucket: "webahck.firebasestorage.app",
  messagingSenderId: "1098963258204",
  appId: "1:1098963258204:web:8fd1fc253b9dad711b0f99",
  measurementId: "G-4NLHSRMPCC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
