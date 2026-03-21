// 🔥 Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ⚠️ ΒΑΛΕ ΕΔΩ ΤΑ ΔΙΚΑ ΣΟΥ
const firebaseConfig = {
  apiKey: "PUT-YOURS",
  authDomain: "PUT-YOURS",
  projectId: "PUT-YOURS",
  storageBucket: "PUT-YOURS",
  messagingSenderId: "PUT-YOURS",
  appId: "PUT-YOURS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, deleteDoc, doc };
