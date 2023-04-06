// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {
  GoogleAuthProvider, 
  signInWithPopup,  
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDxNSg9tfUXBjqBjJ69UbHAY3Cx4-ERl4s",
  authDomain: "fir-auth-6bb62.firebaseapp.com",
  projectId: "fir-auth-6bb62",
  storageBucket: "fir-auth-6bb62.appspot.com",
  messagingSenderId: "453486375576",
  appId: "1:453486375576:web:b99259208baf11512a16ed"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const createUser = ({email, password}) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const signIn = ({email, password}) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const googleSignIn = () => signInWithPopup(auth, googleProvider);

export const logout = () => signOut(auth);
