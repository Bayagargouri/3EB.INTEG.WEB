
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjEZpOhQypcy02poEusdG75423aHi8ZHk",
  authDomain: "netflix-clone-37f71.firebaseapp.com",
  projectId: "netflix-clone-37f71",
  storageBucket: "netflix-clone-37f71.appspot.com",
  messagingSenderId: "379636207923",
  appId: "1:379636207923:web:5e6fa997f97f937ca1ae46",
  measurementId: "G-KFQ3MBHEQJ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
