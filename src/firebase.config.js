// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGrxtOWfSzuXGsBugx-lu-Y6qDWcuth3A",
  authDomain: "clone-977f4.firebaseapp.com",
  projectId: "clone-977f4",
  storageBucket: "clone-977f4.appspot.com",
  messagingSenderId: "188885147195",
  appId: "1:188885147195:web:4b77b629e61cc225ba861e",
  measurementId: "G-YXVGCWX6WR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;