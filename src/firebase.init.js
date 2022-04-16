// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4F3SWYK_cx4yq44b4e-8jj7xT_es0PTc",
  authDomain: "ema-john-shopping-4bdfa.firebaseapp.com",
  projectId: "ema-john-shopping-4bdfa",
  storageBucket: "ema-john-shopping-4bdfa.appspot.com",
  messagingSenderId: "187696764711",
  appId: "1:187696764711:web:f347416b8b54fa5c2dfb02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
