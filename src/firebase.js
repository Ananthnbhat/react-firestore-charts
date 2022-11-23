// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfmZa1zPFVa2G-49duNQebEMZyqYWa_UE",
    authDomain: "random-word-f6fee.firebaseapp.com",
    projectId: "random-word-f6fee",
    storageBucket: "random-word-f6fee.appspot.com",
    messagingSenderId: "584525000889",
    appId: "1:584525000889:web:00d0c4523835770b57ab68",
    measurementId: "G-JMDH91NSJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }