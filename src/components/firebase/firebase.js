// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,collection} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi9PJ8j7uEweE-E0H7J-KmWpKM_G4398U",
  authDomain: "filmyverse-c1c89.firebaseapp.com",
  projectId: "filmyverse-c1c89",
  storageBucket: "filmyverse-c1c89.appspot.com",
  messagingSenderId: "108088300575",
  appId: "1:108088300575:web:604024b05b641b1027312a",
  measurementId: "G-6JVPNFH7WF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);
export const moviesRef=collection(db,"Movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users")
export default app;