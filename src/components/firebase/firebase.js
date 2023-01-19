// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcUAULcMJ8Y5we5AdFPmAwEeI9gND0Uy8",
  authDomain: "react-http-c8445.firebaseapp.com",
  databaseURL: "https://react-http-c8445-default-rtdb.firebaseio.com",
  projectId: "react-http-c8445",
  storageBucket: "react-http-c8445.appspot.com",
  messagingSenderId: "461399406790",
  appId: "1:461399406790:web:6624129c0cf12d2e1e7fc7",
  measurementId: "G-ESGVLB2SSG",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
