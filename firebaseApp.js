/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage ,getDownloadURL
    , ref} from "firebase/storage"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYTKtw2BpNsOKfOoTslEXTz6aNQf5gCD0",
  authDomain: "azyzhssin.firebaseapp.com",
  projectId: "azyzhssin",
  storageBucket: "azyzhssin.appspot.com",
  messagingSenderId: "311973738143",
  appId: "1:311973738143:web:c3a41d658d6940596c94aa",
  measurementId: "G-B7T0D17Z89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage =  getStorage();

const pdfRef = ref(storage,'Mohamed Aziz Hssin_fr.pdf')
const analytics = getAnalytics(app);
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMqCHV72jJbZXUvz06HVFfW7_ZftYeER4",
  authDomain: "emna-s-portfolio.firebaseapp.com",
  projectId: "emna-s-portfolio",
  storageBucket: "emna-s-portfolio.appspot.com",
  messagingSenderId: "539201932618",
  appId: "1:539201932618:web:43ec433fa6e26c104585b3",
  measurementId: "G-4J5FT9L2RB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);