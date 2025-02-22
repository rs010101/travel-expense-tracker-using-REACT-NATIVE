// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUL678TX83M43keBIVqJHTniHoAwrxuWs",
  authDomain: "travel-expense-tracker-2d77b.firebaseapp.com",
  projectId: "travel-expense-tracker-2d77b",
  storageBucket: "travel-expense-tracker-2d77b.firebasestorage.app",
  messagingSenderId: "115036041975",
  appId: "1:115036041975:web:92f99328fc22a4f71359f2",
  measurementId: "G-K0NVMMX90M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);