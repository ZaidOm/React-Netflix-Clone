import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB7mIBwLBN5s5OK_5Z5Fu2u4bf-N2ZvNzA",
    authDomain: "netflix-c5e85.firebaseapp.com",
    databaseURL: "https://netflix-c5e85.firebaseio.com",
    projectId: "netflix-c5e85",
    storageBucket: "netflix-c5e85.appspot.com",
    messagingSenderId: "683545101585",
    appId: "1:683545101585:web:c9869016251c19fb0d78b0",
    measurementId: "G-RY7CZQENJK"
};

const firebase = Firebase.initializeApp(config);


export { firebase };