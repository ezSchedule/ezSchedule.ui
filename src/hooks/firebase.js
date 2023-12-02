// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAibUgcYA_SgY28ErS3Offvh1Z_xpfpbyw",
  authDomain: "ezschedule-71596.firebaseapp.com",
  projectId: "ezschedule-71596",
  storageBucket: "ezschedule-71596.appspot.com",
  messagingSenderId: "157545262750",
  appId: "1:157545262750:web:02fd740e3b1d0382ac958f",
  measurementId: "G-KJPY20LXZX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);

export default app; // Você pode exportar a instância do app se precisar dela em outro lugar
