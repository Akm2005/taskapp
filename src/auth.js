
import {getAuth} from 'firebase/auth';
 import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBksmL1NLno-G7Aq5P9thkYfvjrAjLjcfQ",
  authDomain: "backapp-352f5.firebaseapp.com",
  projectId: "backapp-352f5",
  storageBucket: "backapp-352f5.appspot.com",
  messagingSenderId: "221138862151",
  appId: "1:221138862151:web:f3ef788b6a97b387f97162"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
