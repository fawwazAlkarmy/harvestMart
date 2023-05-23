// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQOTKHI5TB3-M3TqVbhzmfI647vO87BSA",
  authDomain: "harvestmart-929c6.firebaseapp.com",
  projectId: "harvestmart-929c6",
  storageBucket: "harvestmart-929c6.appspot.com",
  messagingSenderId: "832491852908",
  appId: "1:832491852908:web:ee07d01b98babced907449",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default app;
