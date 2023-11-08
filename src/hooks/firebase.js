// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAibUgcYA_SgY28ErS3Offvh1Z_xpfpbyw",
  authDomain: "ezschedule-71596.firebaseapp.com",
  projectId: "ezschedule-71596",
  storageBucket: "ezschedule-71596.appspot.com",
  messagingSenderId: "157545262750",
  appId: "1:157545262750:web:02fd740e3b1d0382ac958f",
  measurementId: "G-KJPY20LXZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);