// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh_ruLebWiTadwMzWfPktGs-nJGon7gWQ",
  authDomain: "ml-2c031.firebaseapp.com",
  projectId: "ml-2c031",
  storageBucket: "ml-2c031.appspot.com",
  messagingSenderId: "1017430259486",
  appId: "1:1017430259486:web:761b98ce57275eecbe3b0f",
  measurementId: "G-7J3EKBGMM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);