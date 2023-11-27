import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Required for side-effects
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyARwKQx5lxSAcq_6Kwtk0G23ks1slY94MM",
  authDomain: "lifecounter-1c8bf.firebaseapp.com",
  projectId: "lifecounter-1c8bf",
  storageBucket: "lifecounter-1c8bf.appspot.com",
  messagingSenderId: "329868007787",
  appId: "1:329868007787:web:52474288bdd6aeb9e3942e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
