
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCySLd-j0zfxN7fvQD667XIQDya6lOFdUI",
  authDomain: "coffee-store-app-9bc2c.firebaseapp.com",
  projectId: "coffee-store-app-9bc2c",
  storageBucket: "coffee-store-app-9bc2c.firebasestorage.app",
  messagingSenderId: "879115307468",
  appId: "1:879115307468:web:ff30c229dc4e3e8ff17569"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);