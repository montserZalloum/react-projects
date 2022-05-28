// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzj7Fuk0-ZEf8n8u93ELpnPd0sEbNnh-w",
  authDomain: "react-projects-79a2a.firebaseapp.com",
  projectId: "react-projects-79a2a",
  storageBucket: "react-projects-79a2a.appspot.com",
  messagingSenderId: "829790637374",
  appId: "1:829790637374:web:fc6ac4285fb24e8676f06f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email,password) {
    return createUserWithEmailAndPassword(auth,email,password)
}
export function login(email,password) {
    return signInWithEmailAndPassword(auth,email,password)
}
export {auth};