// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2kwYHFXbTKv_FK4e-KcQNjG4jV_spJZk",
    authDomain: "globo-politico.firebaseapp.com",
    projectId: "globo-politico",
    storageBucket: "globo-politico.appspot.com",
    messagingSenderId: "672317546121",
    appId: "1:672317546121:web:46e74a7eb11a4dba007058",
    measurementId: "G-XDVC439R12",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
export let analytics: Analytics;
if (typeof window !== "undefined") analytics = getAnalytics(app);

// Initialize Firestore Database
export const db: Firestore = getFirestore(app);
// Initialize Firebase Storage
export const storage: FirebaseStorage = getStorage(app);
