// Import the functions you need from the SDKs you need
import { createContext,useContext, useEffect,useState } from "react";
import { initializeApp } from "firebase/app";
import {signOut,getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  // apiKey: "AIzaSyAqs2KL5yoLEG6bp1GTN3Tsw_Yr5-KedDE",
  // authDomain: "restaurant-b9bc3.firebaseapp.com",
  // projectId: "restaurant-b9bc3",
  // storageBucket: "restaurant-b9bc3.appspot.com",
  // messagingSenderId: "878253986485",
  // appId: "1:878253986485:web:227a56922b5a85371824fc",
  // measurementId: "G-T0CRN34JCC"
  apiKey: "AIzaSyC5W2xI-U8hhIFb_IZcv9e9vc4qnSihTqY",
  authDomain: "rest2-477d2.firebaseapp.com",
  projectId: "rest2-477d2",
  storageBucket: "rest2-477d2.appspot.com",
  messagingSenderId: "671690778826",
  appId: "1:671690778826:web:b2ac1b5774fde927a0ac33",
  measurementId: "G-CP0PPXWEDC"
};


export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const firestore = getFirestore(FirebaseApp);