// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDHMsaxnaPkJ4qM4jc6_AlksoCqf8y-xNg",
  authDomain: "eksamen-tihi-vi-doer.firebaseapp.com",
  databaseURL: "https://eksamen-tihi-vi-doer-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eksamen-tihi-vi-doer",
  storageBucket: "eksamen-tihi-vi-doer.firebasestorage.app",
  messagingSenderId: "110120621437",
  appId: "1:110120621437:web:5ef8b91101b4245dbde814",
  measurementId: "G-ET09YTWLDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };
