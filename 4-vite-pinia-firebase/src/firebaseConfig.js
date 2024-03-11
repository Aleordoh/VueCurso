// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIO24-gWoGDPMJw7ZqVtStNWpfL3TrxIU",
  authDomain: "vue-curso2024.firebaseapp.com",
  projectId: "vue-curso2024",
  storageBucket: "vue-curso2024.appspot.com",
  messagingSenderId: "645555396957",
  appId: "1:645555396957:web:4b6c7ee577e7d4180708b4",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
