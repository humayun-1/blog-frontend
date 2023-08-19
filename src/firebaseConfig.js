// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBzIE1mABtitQoan9NbgtHKemhQw0bCP_g",
  authDomain: "blog-7bbc7.firebaseapp.com",
  projectId: "blog-7bbc7",
  storageBucket: "blog-7bbc7.appspot.com",
  messagingSenderId: "126604168774",
  appId: "1:126604168774:web:af58631abe5c4aa5294447",
  measurementId: "G-8S4SSC5KF7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)