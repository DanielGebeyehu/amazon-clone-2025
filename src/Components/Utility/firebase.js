// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import {auth} from "../Utility/firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6WcqpNt8IIh-WXprxEyTNcssVhjNrjjc",
  authDomain: "clone-bce08.firebaseapp.com",
  projectId: "clone-bce08",
  storageBucket: "clone-bce08.firebasestorage.app",
  messagingSenderId: "764249013242",
  appId: "1:764249013242:web:658e741ff7d90f42368243",
  measurementId: "G-V65GJ30CVE",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = app.firestore();
