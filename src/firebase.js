// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQxO5pKEbzDARULiluTNnwlmKiV0WXed0",
  authDomain: "moduleimages-785ef.firebaseapp.com",
  projectId: "moduleimages-785ef",
  storageBucket: "moduleimages-785ef.appspot.com",
  messagingSenderId: "1014969425132",
  appId: "1:1014969425132:web:09b9ebd8ff7d8f8aa719c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export{storage};