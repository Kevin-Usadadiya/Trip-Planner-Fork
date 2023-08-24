// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3kk9qLE256H0ELJXkoDQlG9ZSBz_79-4",
  authDomain: "nomadic-2573e.firebaseapp.com",
  projectId: "nomadic-2573e",
  storageBucket: "nomadic-2573e.appspot.com",
  messagingSenderId: "669448722848",
  appId: "1:669448722848:web:d327a82f17b9d325f1acc5",
  measurementId: "G-C5C51R2DP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export  const auth = getAuth(app)