// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
