// Import the functions you need from the SDKs you need
import { createContext,useContext, useEffect,useState } from "react";
import { initializeApp } from "firebase/app";
import {signOut,getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAqs2KL5yoLEG6bp1GTN3Tsw_Yr5-KedDE",
  authDomain: "restaurant-b9bc3.firebaseapp.com",
  projectId: "restaurant-b9bc3",
  storageBucket: "restaurant-b9bc3.appspot.com",
  messagingSenderId: "878253986485",
  appId: "1:878253986485:web:227a56922b5a85371824fc",
  measurementId: "G-T0CRN34JCC"
};


export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
