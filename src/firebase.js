import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCsoqGUEIPaLSgb1zSMjdigOVS33RTthFY",
    authDomain: "react-twitter-clone-mido.firebaseapp.com",
    projectId: "react-twitter-clone-mido",
    storageBucket: "react-twitter-clone-mido.appspot.com",
    messagingSenderId: "153370268096",
    appId: "1:153370268096:web:85ff904541dc2a31e2f825",
    measurementId: "G-GZLM4M60BG"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app);

export {db};