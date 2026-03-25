import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore }  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "AIzaSyDdcxg-L8xuypJC1Rs_O2BPgly_JNH2woU",
  authDomain:        "wisherly-d07d7.firebaseapp.com",
  projectId:         "wisherly-d07d7",
  storageBucket:     "wisherly-d07d7.firebasestorage.app",
  messagingSenderId: "919116839261",
  appId:             "1:919116839261:web:147d6b5924f3cbe35050b4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);