// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

apiKey:inport.meta.env.VITE_apiKey,
authDomain:inport.meta.env.VITE_authDomain,
projectId:inport.meta.env.VITE_projectId,
storageBucket:inport.meta.env.VITE_storageBucket,
messagingSenderId:inport.meta.env.VITE_messagingSenderId,
appId:inport.meta.env.VITE_appId

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);