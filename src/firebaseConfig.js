// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC41LWLEvOkrysdgVJoyMEcdLSyVc8n8aA",
  authDomain: "dreamshark-16cd6.firebaseapp.com",
  projectId: "dreamshark-16cd6",
  storageBucket: "dreamshark-16cd6.firebasestorage.app",
  messagingSenderId: "15146223693",
  appId: "1:15146223693:web:a33447921855cbd86d7404",
  measurementId: "G-2JE9EP9RJW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
