// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvJsmLMnp4zztXauYHOLjFlhcoGIztphQ",
  authDomain: "coffee-store-85bdb.firebaseapp.com",
  projectId: "coffee-store-85bdb",
  storageBucket: "coffee-store-85bdb.firebasestorage.app",
  messagingSenderId: "842105058005",
  appId: "1:842105058005:web:343ca55ec72cafcf29685c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;