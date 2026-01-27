// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth/web-extension";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVzTQXgy3vXgkHBLNCmzqtF3K37RFH-XE",
  authDomain: "home-service-booking-app-84b17.firebaseapp.com",
  projectId: "home-service-booking-app-84b17",
  storageBucket: "home-service-booking-app-84b17.firebasestorage.app",
  messagingSenderId: "764253865217",
  appId: "1:764253865217:web:302e253081c778f0ed0700",
  measurementId: "G-WW5J7XC95B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
