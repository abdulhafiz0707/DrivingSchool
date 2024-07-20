// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ85JGLqswvV-GTtUumDhkSe6D83of2CA",
  authDomain: "drivingschool-d36b3.firebaseapp.com",
  projectId: "drivingschool-d36b3",
  storageBucket: "drivingschool-d36b3.appspot.com",
  messagingSenderId: "53942734557",
  appId: "1:53942734557:web:41732be6a860bbab6b5534"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;