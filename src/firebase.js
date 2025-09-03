import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCu_yU6m9rQxQCmIwOJ8nEOfczwvrfpOkY",
  authDomain: "netflix-clone-703ae.firebaseapp.com",
  projectId: "netflix-clone-703ae",
  storageBucket: "netflix-clone-703ae.firebasestorage.app",
  messagingSenderId: "909978823664",
  appId: "1:909978823664:web:2ed1a5a9ef5b8c9257cb35",
  measurementId: "G-E115G7XP1Q"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
