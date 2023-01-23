import { initializeApp } from "firebase/app";
import { get, getDatabase, child, ref} from "firebase/database"

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
const dbRef = ref(getDatabase(firebase));


get(child(dbRef, `items/${id}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val)
  } else {
    console.log("No data");
  }
}).catch((error) => {
  console.log(error)
});

export default database;
