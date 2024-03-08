// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5rP6c54mnWdJdNyfj-zoQbCN0a_ITyCI",
  authDomain: "spades-6cdae.firebaseapp.com",
  projectId: "spades-6cdae",
  storageBucket: "spades-6cdae.appspot.com",
  messagingSenderId: "16550338931",
  appId: "1:16550338931:web:369645b0f839ac72aae506",
  measurementId: "G-DSP7BKD8QM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const authentication = getAuth(app);
const storage = getStorage(app);

export { app,
  // analytics,
  db, storage, authentication }