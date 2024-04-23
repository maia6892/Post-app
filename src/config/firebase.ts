// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiwNbL8cXRs5zYYag4q8IzT2joN3zYniU",
    authDomain: "my-app-6c185.firebaseapp.com",
    projectId: "my-app-6c185",
    storageBucket: "my-app-6c185.appspot.com",
    messagingSenderId: "242542428334",
    appId: "1:242542428334:web:53427bdde13190520e2d3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
