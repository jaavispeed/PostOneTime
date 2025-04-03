// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK9yD2wFlQP9eBgb9GuIVAU21j21bF5CQ",
  authDomain: "postonetime-74c56.firebaseapp.com",
  projectId: "postonetime-74c56",
  storageBucket: "postonetime-74c56.firebasestorage.app",
  messagingSenderId: "262522875304",
  appId: "1:262522875304:web:f953324c1cb4f46d07c19d"
};

// Initialize Firebase
const appFireBase = initializeApp(firebaseConfig);

export default appFireBase;