import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//  Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbzokpfGyLYedDpji280UZc8VQwRVOQUg",
  authDomain: "react-portfolio-saalim.firebaseapp.com",
  projectId: "react-portfolio-saalim",
  storageBucket: "react-portfolio-saalim.appspot.com",
  messagingSenderId: "956810206901",
  appId: "1:956810206901:web:6a4532b527881ba9b1a8fc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
