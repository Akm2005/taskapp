// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfqqciTvLm6Bmi3CXDwBschOABh0cDqoA",
  authDomain: "taskapp-f6bd0.firebaseapp.com",
  databaseURL: "https://taskapp-f6bd0-default-rtdb.firebaseio.com",
  projectId: "taskapp-f6bd0",
  storageBucket: "taskapp-f6bd0.appspot.com",
  messagingSenderId: "433766145735",
  appId: "1:433766145735:web:c0e671f89241c62b1c68e2",
  measurementId: "G-XX7SFXNP1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);