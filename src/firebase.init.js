// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYknFUFyW5MHZsz57QGv8UPAyw9_Aqwys",
  authDomain: "my-car-project-4688c.firebaseapp.com",
  projectId: "my-car-project-4688c",
  storageBucket: "my-car-project-4688c.appspot.com",
  messagingSenderId: "1020798033992",
  appId: "1:1020798033992:web:68885cceed07bfe208f87d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;