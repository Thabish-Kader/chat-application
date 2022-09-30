// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyB06GLjFlGdiStYqNs7XKiTz_tQqECweZE",

    authDomain: "react-webapp-7defc.firebaseapp.com",

    projectId: "react-webapp-7defc",

    storageBucket: "react-webapp-7defc.appspot.com",

    messagingSenderId: "571149835130",

    appId: "1:571149835130:web:624431ec2fa85dee9914c3"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = new getFirestore(app);
