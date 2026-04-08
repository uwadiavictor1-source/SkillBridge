// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAG7TNsPl0eVYimAZTSmUJGDMtRmVQOFTY",
  authDomain: "skillbridge-26105.firebaseapp.com",
  projectId: "skillbridge-26105",
  storageBucket: "skillbridge-26105.firebasestorage.app",
  messagingSenderId: "688380771987",
  appId: "1:688380771987:web:805ea3cd2617db5db41766",
  measurementId: "G-BL8TV2CP3V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Set persistence to LOCAL - this is crucial!
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Firebase Auth persistence set to LOCAL");
  })
  .catch((error) => {
    console.error("Error setting auth persistence:", error);
  });

export const db = getFirestore(app);
export const storage = getStorage(app);