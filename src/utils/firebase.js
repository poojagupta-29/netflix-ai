// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgBAY_SdDTRCcqpUFdQRAo-sknDHp6IUk",
    authDomain: "netflixai-abd96.firebaseapp.com",
    projectId: "netflixai-abd96",
    storageBucket: "netflixai-abd96.firebasestorage.app",
    messagingSenderId: "83525069795",
    appId: "1:83525069795:web:656b8f85c6a59b859cced6",
    measurementId: "G-E7ZRFYJN55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();