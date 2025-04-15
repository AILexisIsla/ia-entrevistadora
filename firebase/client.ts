// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMGTLooZqQIogcL_VbvFjdd-ihiUAqFRs",
  authDomain: "alewise-f275f.firebaseapp.com",
  projectId: "alewise-f275f",
  storageBucket: "alewise-f275f.firebasestorage.app",
  messagingSenderId: "624451917288",
  appId: "1:624451917288:web:643e100f08a751e0a4005d",
  measurementId: "G-L80G9R646C"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);