// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI4UWCVQx4RiYhLeTbe7XezcZoCP5Oh3M",
  authDomain: "genova-indumentaria-15804.firebaseapp.com",
  projectId: "genova-indumentaria-15804",
  storageBucket: "genova-indumentaria-15804.appspot.com",
  messagingSenderId: "779329086676",
  appId: "1:779329086676:web:ca20803893a9ebe2738741",
  measurementId: "G-MGP3KZ81Y3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);