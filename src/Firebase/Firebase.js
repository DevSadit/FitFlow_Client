// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2_N0Uuql6qi_jUzmczR132mrFl0ZA8nc",
  authDomain: "fitness-tracker-d37b8.firebaseapp.com",
  projectId: "fitness-tracker-d37b8",
  storageBucket: "fitness-tracker-d37b8.appspot.com",
  messagingSenderId: "67335552628",
  appId: "1:67335552628:web:2c11881c3397f996a1db21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;