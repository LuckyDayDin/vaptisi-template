import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4tHnzzHFCULBEO_gu7EfE5Rv1Yq7OVjk",
  authDomain: "vaptisi-60066.firebaseapp.com",
  projectId: "vaptisi-60066",
  storageBucket: "vaptisi-60066.firebasestorage.app",
  messagingSenderId: "557129876001",
  appId: "1:557129876001:web:8af2ef4ecd246dd566d960",
  measurementId: "G-F53K4E7BMZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };
