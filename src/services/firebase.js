// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCWOVmAelW9BS_cTde4CTavXsY4EU96rZ8",
  authDomain: "coder-reactjs-4d956.firebaseapp.com",
  projectId: "coder-reactjs-4d956",
  storageBucket: "coder-reactjs-4d956.firebasestorage.app",
  messagingSenderId: "213398997073",
  appId: "1:213398997073:web:e297d1e3ffbba4a3d9d070",
  measurementId: "G-P14S6E91TE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);