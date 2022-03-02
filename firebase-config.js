// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9AgbNbwrXDkNlLhJwznJHWUXxyfdYV8s",
    authDomain: "denemeproj-8496d.firebaseapp.com",
    projectId: "denemeproj-8496d",
    storageBucket: "denemeproj-8496d.appspot.com",
    messagingSenderId: "504253223941",
    appId: "1:504253223941:web:42473b7e44c81ba205386c",

};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const fireStore = firebase.fireStore();
const auth = firebase.auth();
const background = firebase.functions()
export {
    fireStore,
    auth
};