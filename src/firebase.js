
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBDnZpK7pIyuqzUXq2OopDYhDaR5eQsPSI",
  authDomain: "my-portfolio-mohit.firebaseapp.com",
  projectId: "my-portfolio-mohit",
  storageBucket: "my-portfolio-mohit.appspot.com",
  messagingSenderId: "195279943963",
  appId: "1:195279943963:web:27ed78f5318ecbced1bbbe"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()