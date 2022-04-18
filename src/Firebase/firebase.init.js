// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrL7t7ABBMRyTQs4mkl04b0MSm5GoRh7c",
    authDomain: "travel-guide-service.firebaseapp.com",
    projectId: "travel-guide-service",
    storageBucket: "travel-guide-service.appspot.com",
    messagingSenderId: "637577862210",
    appId: "1:637577862210:web:6bee443ca2d74ea18b61db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;