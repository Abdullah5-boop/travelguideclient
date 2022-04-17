// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChCUyo5vgCB8TVAjOElm3JyC-cKnVgHzg",
  authDomain: "p-hero-assingment.firebaseapp.com",
  projectId: "p-hero-assingment",
  storageBucket: "p-hero-assingment.appspot.com",
  messagingSenderId: "813736860934",
  appId: "1:813736860934:web:e20b9ba714c78c7b225287",
  measurementId: "G-LBE73VV9EL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth= getAuth(app);
export default auth;