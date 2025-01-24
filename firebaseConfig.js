import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAD3R_VNRUrZmU6WLugqNVo0je7Ay2sEY",
  authDomain: "projectdpm-1962a.firebaseapp.com",
  projectId: "projectdpm-1962a",
  storageBucket: "projectdpm-1962a.firebasestorage.app",
  messagingSenderId: "921759452189",
  appId: "1:921759452189:web:6c4cb3fed47811b5de8af4",
  measurementId: "G-KC2CQQ2V3L"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
