import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEAoOtCSLlodY8CdrMfD_jbqAFt8R0GCk",
  authDomain: "aech-b9789.firebaseapp.com",
  projectId: "aech-b9789",
  storageBucket: "aech-b9789.appspot.com",
  messagingSenderId: "519371672903",
  appId: "1:519371672903:web:983407a58d73a01f985062",
  measurementId: "G-K03LSKPHXT",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
