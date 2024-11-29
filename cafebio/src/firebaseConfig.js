// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOx32YweLEvO7KZVvrDKnKp6dK96mBDl4",
  authDomain: "update-event-8f0f6.firebaseapp.com",
  databaseURL: "https://update-event-8f0f6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "update-event-8f0f6",
  storageBucket: "update-event-8f0f6.firebasestorage.app",
  messagingSenderId: "1402621778",
  appId: "1:1402621778:web:cc160ff6d40e0b4da0348b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };
