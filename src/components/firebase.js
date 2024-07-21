// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdNlHaA7-N8xP_XK1nFUF5a6H-UtNRO9A",
  authDomain: "ansh-portfolio-43a1f.firebaseapp.com",
  projectId: "ansh-portfolio-43a1f",
  storageBucket: "ansh-portfolio-43a1f.appspot.com",
  messagingSenderId: "510331030098",
  appId: "1:510331030098:web:5147a8541a498c6d086d8b",
  measurementId: "G-RLXWT0TZG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

// Export Firestore
export { db };
