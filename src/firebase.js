// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgyarRx6ZSQogqfAGxhp68f9i6SEgMNYM",
  authDomain: "todo-app-6287e.firebaseapp.com",
  projectId: "todo-app-6287e",
  storageBucket: "todo-app-6287e.appspot.com",
  messagingSenderId: "281418826723",
  appId: "1:281418826723:web:82eabe1474a36a4c3856d6",
  measurementId: "G-GTS496D2JL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);