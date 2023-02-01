import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAxSvzR0LlBLKPO-wWQ1O26VPA0qoq8J8M",
  authDomain: "todo-aa9a0.firebaseapp.com",
  projectId: "todo-aa9a0",
  storageBucket: "todo-aa9a0.appspot.com",
  messagingSenderId: "131159475129",
  appId: "1:131159475129:web:36b6201e7d7898c893ac68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
