// week-8/_utils/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvcPo63hbehLaEBHM6_2QcwIxjWGf9GDI",
  authDomain: "cprg306-assignments-8f5be.firebaseapp.com",
  projectId: "cprg306-assignments-8f5be",
  storageBucket: "cprg306-assignments-8f5be.appspot.com",
  messagingSenderId: "996143966444",
  appId: "1:996143966444:web:c009ef02152f2aa7f11dc9",
  measurementId: "G-4148CP9W4V" // optional, required for Firebase Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
