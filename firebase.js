import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyBvGFGgtb8RB7pVXRha9wYAUXUtv9U1PjQ",
  authDomain: "kotid-bd185.firebaseapp.com",
  projectId: "kotid-bd185",
  storageBucket: "kotid-bd185.firebasestorage.app",
  messagingSenderId: "1038854598296",
  appId: "1:1038854598296:web:fda54c4ccca3f365426aed"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };
