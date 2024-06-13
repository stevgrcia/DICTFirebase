// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbM4f54X8BYm2ZDgea6pGZwyAWFTV9mDI",
  authDomain: "dict-firebasecoursebank.firebaseapp.com",
  projectId: "dict-firebasecoursebank",
  storageBucket: "dict-firebasecoursebank.appspot.com",
  messagingSenderId: "65465544804",
  appId: "1:65465544804:web:c904998ae4c7ce6ac1ef71",
  measurementId: "G-XZEYGCHEN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)