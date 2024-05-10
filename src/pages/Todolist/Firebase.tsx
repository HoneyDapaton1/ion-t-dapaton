// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEgnI2Y91eWB-slrAe-wnGYGhDKdyi9fc",
    authDomain: "ion-t-dapaton.firebaseapp.com",
    projectId: "ion-t-dapaton",
    storageBucket: "ion-t-dapaton.appspot.com",
    messagingSenderId: "151299362449",
    appId: "1:151299362449:web:ec4d94315fa04dad287930",
    measurementId: "G-VZRB74V43B"
  };


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}