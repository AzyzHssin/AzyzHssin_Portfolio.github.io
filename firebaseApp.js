// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqpkSxxXoBVnkpWjlLbbMRZZJ_0II1ggk",
  authDomain: "nefziemna-8a14e.firebaseapp.com",
  projectId: "nefziemna-8a14e",
  storageBucket: "nefziemna-8a14e.appspot.com",
  messagingSenderId: "453062437966",
  appId: "1:453062437966:web:9dfb9f93b5a83768f6e71f",
  measurementId: "G-VWFL9KHS1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);