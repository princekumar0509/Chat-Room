// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT5xvYR97JB3MqQ0l6CrUs_u1Zmi5Us3I",
  authDomain: "chat-room-a3601.firebaseapp.com",
  projectId: "chat-room-a3601",
  storageBucket: "chat-room-a3601.firebasestorage.app",
  messagingSenderId: "995669020472",
  appId: "1:995669020472:web:d0cae066c9c24e41a4fbcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);