// 🔥 Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ✅ ΒΑΛΕ ΤΑ ΔΙΚΑ ΣΟΥ ΑΠΟ FIREBASE
const firebaseConfig = {
  apiKey: "XXXXXXXX",
  authDomain: "XXXXXXXX.firebaseapp.com",
  projectId: "XXXXXXXX",
  storageBucket: "XXXXXXXX.appspot.com",
  messagingSenderId: "XXXXXXXX",
  appId: "XXXXXXXX"
};

// 🚀 INIT
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 📦 EXPORT
export { db, collection, addDoc, getDocs };
