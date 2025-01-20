import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC9QehC4FrFHcoEyhR2Dj7XHLiWFUEDOro",
    authDomain: "summative-717a1.firebaseapp.com",
    projectId: "summative-717a1",
    storageBucket: "summative-717a1.firebasestorage.app",
    messagingSenderId: "74864377869",
    appId: "1:74864377869:web:f3c019b84ad2dad5bd1544"
  };
  

const config = initializeApp(firebaseConfig)
const auth = getAuth(config);
const firestore = getFirestore(config);

export { auth, firestore };